class Excursion < ApplicationRecord
  validates :name, presence: true
  validates :name, uniqueness: true

  belongs_to :region
end
