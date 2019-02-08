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
