class Api::V1::ExcursionsController < Api::V1::ApiController

  def search
    city = City.find(params[:city_id])
    location = "#{city.name}, MA"
    term = params[:query]
    excursion_parser = ExcursionParser.new
    excursion_parser.search(term, location)

    if current_user != nil
      itineraries = current_user.itineraries
    else
      itineraries = []
    end

    render json: { data: excursion_parser.data, itineraries: itineraries }
  end

  def business
    # business = params[:business]
    # business_id = business["yelp_business_id"]
    render json: { data: excursion_parser.data }
  end

end
