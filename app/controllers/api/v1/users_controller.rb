class Api::V1::UsersController < Api::V1::ApiController

  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end


end
