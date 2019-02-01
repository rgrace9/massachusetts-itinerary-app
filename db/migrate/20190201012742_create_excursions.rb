class CreateExcursions < ActiveRecord::Migration[5.2]
  def change
    create_table :excursions do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.belongs_to :city, null: false

      t.timestamps null: false
    end
  end
end
