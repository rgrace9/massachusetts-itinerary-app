class Api::V1::BusinessesController < Api::V1::ApiController

  def search
    city= City.find(params[:city_id])
    location = "#{city.name}, MA"
    term = nil
    excursion_parser = ExcursionParser.new
    excursion_parser.search(term, location)
    if current_user != nil
      itineraries = current_user.itineraries
    else
      itineraries = []
    end

    render json: { data: excursion_parser.data, itineraries: itineraries }

  end
end
