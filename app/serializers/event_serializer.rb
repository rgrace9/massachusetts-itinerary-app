class EventSerializer < ActiveModel::Serializer
  attributes :id, :duration, :day, :business_id
  belongs_to :business
end
