class Api::V1::ItinerariesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }


  def show
    itinerary = Itinerary.find(params[:id])
    events = itinerary.events.order(:start_day_time)
    events = events.map do |event|
      EventSerializer.new(event)
    end
    render json: {itinerary:{
      id:itinerary.id,
      user_id: itinerary.user_id,
      name: itinerary.name,
      events: events
      }
    }
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
