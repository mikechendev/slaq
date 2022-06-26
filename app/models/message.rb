class Message < ApplicationRecord
  validates_presence_of :body, :user_id, :chat_id
  belongs_to :user
  belongs_to :chat
end
