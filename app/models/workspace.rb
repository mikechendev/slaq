class Workspace < ApplicationRecord
  validates_presence_of :name, :admin_id

  belongs_to :admin, class_name: "User", foreign_key: :admin_id
  has_many :user_workspaces
  has_many :users, through: :user_workspaces
end
