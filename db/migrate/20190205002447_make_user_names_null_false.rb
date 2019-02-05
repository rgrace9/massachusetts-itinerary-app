class MakeUserNamesNullFalse < ActiveRecord::Migration[5.2]
  def up
    change_column_null :users, :first_name, false, 1
    change_column_null :users, :last_name, false, 1
  end

  def down
    change_column_null :users, :first_name, true
    change_column_null :users, :last_name, true
  end
end
