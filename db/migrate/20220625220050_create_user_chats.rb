class CreateUserChats < ActiveRecord::Migration[5.2]
  def change
    create_table :user_chats do |t|
      t.integer :user_id, null: false
      t.integer :chat_id, null: false

      t.timestamps
    end
  end
end
