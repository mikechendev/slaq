class CreateApiDirectMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :api_direct_messages do |t|

      t.timestamps
    end
  end
end
