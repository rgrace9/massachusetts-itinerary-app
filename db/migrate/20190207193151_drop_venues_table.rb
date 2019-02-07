class DropVenuesTable < ActiveRecord::Migration[5.2]
  def change
      drop_table :venues do |t|
        t.string :name
        t.string :image
        t.string :url
        t.json :categories
        t.string :price
        t.json :coordinates
        t.string :city
        t.string :display_address
    end
  end
end
