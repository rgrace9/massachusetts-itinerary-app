class CreateCities < ActiveRecord::Migration[5.2]
  def change
    create_table :cities do |t|
      t.string :name, null: false
      t.belongs_to :region, null: false

      t.timestamps null: false
    end

    add_index :cities, :name, unique: true
  end
end
