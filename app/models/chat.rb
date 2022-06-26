class Chat < ApplicationRecord
  validates_presence_of :type, :workspace_id
  validates :type, inclusion: { in: %w(channel DM group) }
  validates :name, :admin_id, presence: true, if: :is_channel?
  validates :name, uniqueness: {scope: :workspace_id}

  belongs_to :workspace
  belongs_to :admin, class_name: "User", foreign_key: :admin_id, optional: true
  has_many :user_chats
  has_many :users, through: :user_chats

  #needs admin if type == channel
  def is_channel?
    self.type == "channel"
  end
end
