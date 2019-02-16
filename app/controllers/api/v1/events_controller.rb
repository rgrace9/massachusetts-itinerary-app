class Api::V1::EventsController < Api::V1::ApiController

  def  index
    render json: Event.all
  end



  def update
    event = Event.find(params[:id])
    if event.update_attributes(event_update_params)
      render json: event.itinerary.events
    else
      render json: {error: event.errors}, status: :unprocessable_entity
    end
  end


  def create
    business = Business.find_or_create_by(business_params)

    event = Event.new(event_params)
    event.business = business
    if event.save
      render json: event
    else
      render json: { error: event.errors }
    end
  end

  def destroy
    event = Event.find(params[:id])
    event.delete


  end

  private

  def business_params
    {
      yelp_business_id: params[:business_info][:business_id],
      name: params[:business_info][:name],
      image: params[:business_info][:image],
      url: params[:business_info][:url],
      price: params[:business_info][:price],
      latitude: params[:business_info][:latitude],
      longitude: params[:business_info][:longitude],
      city: params[:business_info][:city],
      display_address: params[:business_info][:display_address]
    }
  end


  def event_params
    {
      time: params[:time],
      day: params[:day],
      itinerary_id: params[:itinerary]
    }
  end

  def event_update_params
    {
      time: params[:time],
      day: params[:day]
    }
  end

end


# grab the "business" info from params which will be the descriptive information for the event
