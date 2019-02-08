class Itinerary < ApplicationRecord
  validates :name, presence: true

  belongs_to :user
  has_many :events
end
