class CreateExcursions < ActiveRecord::Migration[5.2]
  def change
    create_table :excursions do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.belongs_to :region, null: false

      t.timestamps null: false
    end

    add_index :excursions, :name, unique: true
  end
end
