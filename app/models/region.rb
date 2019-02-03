class Region < ApplicationRecord
  validates :name, presence: true
  validates :name, uniqueness: true

  has_many :cities
  # has_many :excursions
end
