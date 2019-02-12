class Api::V1::ItinerariesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def show
    render json: Itinerary.find(params[:id])
  end

  def index
    render json: Itinerary.all
  end

  def create
    itinerary = Itinerary.new(itinerary_params)
    itinerary.user = current_user
    if itinerary.save
      render json: itinerary
    else
      render json: { error: itinerary.errors }
    end
  end

  private
  def itinerary_params
    params.require(:itinerary).permit(:name, :user_id)
  end
end
