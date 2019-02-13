class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :yelp_business_id
      t.string :name
      t.string :image
      t.string :url
      t.string :price
      t.decimal :latitude
      t.decimal :longitude
      t.string :city
      t.string :display_address

      t.timestamps null: false
    end
    remove_column :events, :business_id, :string
    remove_column :events, :name, :string
    remove_column :events, :image, :string
    remove_column :events, :url, :string
    remove_column :events, :price, :string
    remove_column :events, :latitude, :decimal
    remove_column :events, :longitude, :decimal
    remove_column :events, :city, :string
    remove_column :events, :display_address, :string

    add_column :events, :business_id, :bigint, null: false
    add_index :events, :business_id
  end
end
