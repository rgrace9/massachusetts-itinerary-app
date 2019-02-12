class Business < ApplicationRecord
  has_many :events
  has_many :itineraries, through: :events
end
