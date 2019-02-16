class EventSerializer < ActiveModel::Serializer
  attributes :id, :start_event_time, :start_event_day, :start_day_time, :business_id
  belongs_to :business
end
