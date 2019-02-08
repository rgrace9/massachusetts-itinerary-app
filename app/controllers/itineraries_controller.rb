class ItinerariesController < ApplicationController
  def index
    @itinerary = Itinerary.all
  end

  def new
    @itinerary = Itinerary.new
  end

  def create
    @itinerary = Itinerary.new(itinerary_params)

    if @itinerary.save
      redirect_to @itinerary
      flash[:notice] = "Itinerary added successfully"
    else
      render :'new'
    end
  end

  def show
    @itinerary = Itinerary.find(params[:id])
  end

  private
  def podcast_params
    params.require(:itinerary).permit(:name)
  end
end
