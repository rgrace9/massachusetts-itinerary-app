class CitiesController < ApplicationController
  def show
    @city = City.find(params[:id])
    @excursions = @city.excursions
  end
end
