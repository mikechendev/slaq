class DirectMessage < ApplicationRecord
  validates_presence_of :admin_id, :body, :chat_id

  belongs_to :admin, class_name: "User", foreign_key: :admin_id
  belongs_to :chat
end
