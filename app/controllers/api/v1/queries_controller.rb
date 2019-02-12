class Api::V1::QueriesController < Api::V1::ApiController

  def search
    location = params[:location]
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

end
