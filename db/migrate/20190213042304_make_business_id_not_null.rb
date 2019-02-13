class MakeBusinessIdNotNull < ActiveRecord::Migration[5.2]
  def up
    change_column_null :events, :business_id, false, 1
  end

  def down
    change_column_null :events, :business_id, true
  end
end
