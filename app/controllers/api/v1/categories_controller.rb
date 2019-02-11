class Api::V1::CategoriesController < Api::V1::ApiController
  def index
    render json: Category.all
  end
end
