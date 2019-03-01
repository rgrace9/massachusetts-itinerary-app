class Api::V1::LocationsController < Api::V1::ApiController

def index
  render json: Location.all
end


end
