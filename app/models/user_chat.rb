class UserChat < ApplicationRecord
  validates_presence_of :user_id, :chat_id
  belongs_to :chat
  belongs_to :user
end
