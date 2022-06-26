# == Schema Information
#
# Table name: workspaces
#
#  id         :bigint           not null, primary key
#  name       :string
#  admin_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Workspace < ApplicationRecord
  validates_presence_of :name, :admin_id

  belongs_to :admin, class_name: "User", foreign_key: :admin_id
  has_many :user_workspaces
  has_many :users, through: :user_workspaces
  has_many :chats, dependent: :destroy
end
