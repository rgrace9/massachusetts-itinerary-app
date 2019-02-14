class EventSerializer < ActiveModel::Serializer
  attributes :id, :time, :day, :business_id
  belongs_to :business
end
