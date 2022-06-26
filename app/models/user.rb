# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  username        :string
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    attr_reader :password
    validates :email, uniqueness: true, presence: true
    validates_presence_of :username, :password_digest
    validates :password, length: { minimum: 6, allow_nil: true }
    validates :session_token, presence: true, uniqueness: true
    before_validation :ensure_session_token

    has_many :user_workspaces
    has_many :workspaces, through: :user_workspaces
    has_many :admin_workspaces, class_name: "Workspace", foreign_key: :admin_id
    has_many :user_chats
    has_many :chats, through: :user_chats

    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)
        return nil if @user.nil?
        @user.is_password?(password) ? @user : nil
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
        @password = password
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64(16)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64(16)
        self.save!
        self.session_token
    end
end
