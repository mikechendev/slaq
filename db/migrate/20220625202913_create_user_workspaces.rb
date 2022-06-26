class CreateUserWorkspaces < ActiveRecord::Migration[5.2]
  def change
    create_table :user_workspaces do |t|
      t.integer :user_id, null: false
      t.integer :workspace_id, null: false

      t.timestamps
    end
  end
end
