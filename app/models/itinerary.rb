class Itinerary < ApplicationRecord
  validates :name, presence: true

  belongs_to :user
  
  has_many :events
  has_many :businesses, through: :events
end
