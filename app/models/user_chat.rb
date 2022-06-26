# == Schema Information
#
# Table name: user_chats
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  chat_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class UserChat < ApplicationRecord
  validates_presence_of :user_id, :chat_id
  belongs_to :chat
  belongs_to :user
end
