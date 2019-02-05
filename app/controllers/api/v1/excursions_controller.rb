class Api::V1::ExcursionsController < Api::V1::ApiController

  def search
    term = params[:term]
    location = params[:location]
    excursion_parser = ExcursionParser.new
    excursion_parser.search(term, location)
    render json: { data: excursion_parser.data }
  end

  def show
    term = params[:term]
    excursion = Excursion.find(params[:id])
    location = excursion.city
    excursion_parser = ExcursionParser.new
    excursion_parser.search(term, location)
    render json: { data: excursion_parser.data }
  end


end
