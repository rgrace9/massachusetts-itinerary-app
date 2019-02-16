class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :business_id
      t.string :name
      t.string :image
      t.string :url
      t.string :price
      t.decimal :latitude
      t.decimal :longitude
      t.string :city
      t.string :display_address
      t.datetime :start_day_time, null: false
      t.datetime :end_day_time

      t.belongs_to :itinerary, null: false
      t.timestamps null: false
    end
  end
end
