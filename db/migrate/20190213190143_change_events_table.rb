class ChangeEventsTable < ActiveRecord::Migration[5.2]
  def up
      execute <<-SQL
      ALTER TABLE "events" ALTER COLUMN "day" TYPE date
       USING day::date;
      SQL

      change_column :events, :duration, :float
  end

  def down
      change_column :events, :day, :string
      change_column :events, :duration, :string
  end
end
