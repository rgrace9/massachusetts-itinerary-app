require 'http'
require 'json'


API_HOST = "https://api.yelp.com"
SEARCH_PATH = "/v3/businesses/search"
BUSINESS_PATH = "/v3/businesses/"

DEFAULT_BUSINESS_ID = "yelp-boston"
DEFAULT_TERM = "dinner"
DEFAULT_LOCATION = "Boston, MA"
SEARCH_LIMIT = 10

class ExcursionParser
  attr_reader :data

  def initialize
    @data = []
  end

  def search(term, location)
    url = "#{API_HOST}#{SEARCH_PATH}"
    usable_location = location || DEFAULT_LOCATION
    params = {
      term: DEFAULT_TERM,
      location: usable_location,
      limit: SEARCH_LIMIT
    }

    response = HTTP.auth("Bearer #{ENV["YELP_API_KEY"]}").get(url, params: params)
    businesses_data = response.parse["businesses"]
    businesses_data.each do |business|
      new_hash = {
        name: business["name"],
        image: business["image_url"],
        url: business["url"],
        categories: business["categories"],
        price: business["price"],
        coordinates: business["coordinates"],
        city: business["location"]["city"],
        display_address: business["location"]["display_address"]

      }
      @data << new_hash
    end

  end

end

# params = {
#   term: DEFAULT_TERM,
#   location: DEFAULT_LOCATION,
#   limit: SEARCH_LIMIT
#   }
