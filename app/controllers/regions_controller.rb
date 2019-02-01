class RegionsController < ApplicationController
  def index
    @regions = Region.all
  end

  def show
    @region = Region.find(params[:id])
    @excursions = @region.excursions
    @cities = @region.cities
  end
end
