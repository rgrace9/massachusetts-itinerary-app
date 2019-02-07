class Api::V1::ExcursionsController < Api::V1::ApiController

  def search
    city = City.find(params[:city_id])
    location = "#{city.name}, MA"
    term = nil
    excursion_parser = ExcursionParser.new
    excursion_parser.search(term, location)
    render json: { data: excursion_parser.data }
  end



end

# create an Events API controller (or maybe a different one?)
# this controller will contain a def create
# this def create will
# check whether venue is already in db
#   if not, save it to db
# create an Event using the venue, the itinerary, and the time/date
# (all of which are passed as part of the fetch body)
