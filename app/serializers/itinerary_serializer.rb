class ItinerarySerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name
  has_many :events
end
