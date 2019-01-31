class MakeImageNotNull < ActiveRecord::Migration[5.2]
  def up
    change_column_null :regions, :image, false, 1
  end

  def down
    change_column_null :regions, :image, true
  end

end
