class UserWorkspace < ApplicationRecord
  validates_presence_of :user_id, :workspace_id
  belongs_to :user
  belongs_to :workspace
end
