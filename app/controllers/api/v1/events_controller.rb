class Api::V1::EventsController < Api::V1::ApiController

  def  new
    @event = Event.new
  end

  def create
    event = Event.new(sanitize_params)
    if event.save
      render json: event
    else
      render json: { error: event.errors }
    end
  end

  private

  def sanitize_params
    {
    business_id: params[:business_info][:business_id],
    name: params[:business_info][:name],
    image: params[:business_info][:image],
    url: params[:business_info][:url],
    price: params[:business_info][:price],
    latitude: params[:business_info][:latitude],
    longitude: params[:business_info][:longitude],
    city: params[:business_info][:city],
    display_address: params[:business_info][:display_address],
    duration: params[:duration],
    day: params[:day],
    itinerary_id: 1
    }

  end




end


# grab the "business" info from params which will be the descriptive information for the event
