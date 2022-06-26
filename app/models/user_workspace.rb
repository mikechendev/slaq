# == Schema Information
#
# Table name: user_workspaces
#
#  id           :bigint           not null, primary key
#  user_id      :integer
#  workspace_id :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class UserWorkspace < ApplicationRecord
  validates_presence_of :user_id, :workspace_id
  belongs_to :user
  belongs_to :workspace
end
