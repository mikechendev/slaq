class CreateChats < ActiveRecord::Migration[5.2]
  def change
    create_table :chats do |t|
      t.string :name
      t.string :description
      t.integer :admin_id
      t.integer :workspace_id
      t.string :type, null: false

      t.timestamps
    end
  end
end
