require 'http'
require 'json'


API_HOST = "https://api.yelp.com"
SEARCH_PATH = "/v3/businesses/search"
BUSINESS_PATH = "/v3/businesses/"

DEFAULT_BUSINESS_ID = "yelp-boston"
DEFAULT_TERM = "diners"
DEFAULT_LOCATION = "Boston, MA"
SEARCH_LIMIT = 10

class ExcursionParser
  attr_reader :data
  attr_reader :business

  def initialize
    @data = []
    @business = {}
  end

  def search(term, location)
    url = "#{API_HOST}#{SEARCH_PATH}"
    usable_location = location || DEFAULT_LOCATION
    params = {
      term: term,
      location: usable_location,
      limit: SEARCH_LIMIT
    }

    response = HTTP.auth("Bearer #{ENV["YELP_API_KEY"]}").get(url, params: params)
    businesses_data = response.parse["businesses"]
    businesses_data.each do |business|
      new_hash = {
        business_id: business["id"],
        name: business["name"],
        image: business["image_url"],
        url: business["url"],
        price: business["price"],
        latitude: business["coordinates"]["latitude"],
        longitude: business["coordinates"]["longitude"],
        city: business["location"]["city"],
        display_address: business["location"]["display_address"].join(", ")

      }
      @data << new_hash
    end

  end

  def business(business_id)
    url = "#{API_HOST}#{BUSINESS_PATH}#{business_id}"
    response = HTTP.auth("Bearer #{ENV["YELP_API_KEY"]}").get(url)
    @business = response.parse
  end


end
