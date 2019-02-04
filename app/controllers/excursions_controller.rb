class ExcursionsController < ApplicationController

  def index
    @excursions = Excursion.all
  end

  def search
    term = params[:term]
    location = params[:location]
    excursion_parser = ExcursionParser.new
    excursion_parser.search(term, location)
    render json: { data: excursion_parser.data }
  end
end
