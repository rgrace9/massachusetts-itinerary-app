class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.string :name, null: false

      t.timestamps null: false
    end

    add_index :locations, :name, unique: true
  end
end
