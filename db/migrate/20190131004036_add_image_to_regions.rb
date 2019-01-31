class AddImageToRegions < ActiveRecord::Migration[5.2]
  def change
    add_column :regions, :image, :string
  end
end
