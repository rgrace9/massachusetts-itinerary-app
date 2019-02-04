class Api::V1::ExcurionsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def search
    @excursions = Excursion.where("name ILIKE ? OR description ILIKE ?", "%#{params['search_string']}%", "%#{params['search_string']}%")
    render json: @excursions
  end
end
