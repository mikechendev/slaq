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
require 'test_helper'

class UserWorkspaceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
