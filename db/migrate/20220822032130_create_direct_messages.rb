class CreateDirectMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :direct_messages do |t|
      t.integer :admin_id, null: false
      t.text :body, null: false
      t.integer :chat_id, null: false

      t.timestamps
    end
  end
end
