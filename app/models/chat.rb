# == Schema Information
#
# Table name: chats
#
#  id           :bigint           not null, primary key
#  name         :string
#  description  :string
#  admin_id     :integer
#  workspace_id :integer
#  type         :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Chat < ApplicationRecord
  validates_presence_of :chat_type, :workspace_id
  validates :type, inclusion: { in: %w(channel DM group) }
  validates :name, :admin_id, presence: true, if: :is_channel?
  validates :name, uniqueness: {scope: :workspace_id}

  belongs_to :workspace
  belongs_to :admin, class_name: "User", foreign_key: :admin_id, optional: true
  has_many :user_chats
  has_many :users, through: :user_chats

  #needs admin if type == channel
  def is_channel?
    self.chat_type == "channel"
  end
end
