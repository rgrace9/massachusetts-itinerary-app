class Category < ApplicationRecord
  validates :name, presence: true
  validates :yelp_name, presence: true
end
