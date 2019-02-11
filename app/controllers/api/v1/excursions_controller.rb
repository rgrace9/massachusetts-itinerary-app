class Api::V1::ExcursionsController < Api::V1::ApiController

  def search
    city = City.find(params[:city_id])
    location = "#{city.name}, MA"
    term = params[:query]
    excursion_parser = ExcursionParser.new
    excursion_parser.search(term, location)

    if current_user != nil
      itineraries = current_user.itineraries
    else
      itineraries = []
    end

    render json: { data: excursion_parser.data, itineraries: itineraries }
  end

#   def business
#     binding.pry
#     excursion_parser = ExcursionParser.new
#     excursion_parser.business("QFq8CccuRrEq9MsTUCnD9Q")
# end
end
# def search
# @businesses = ExcursionParser.where("term ILIKE ?", "%#{params['search_string']}%")
# render json: @businesses
# end
# if current_user != nil
#   itineraries = current_user.itineraries
# else
#   itineraries = []
# end

# render json: { data: excursion_parser.data}
# Make a conditional - whether or not a user is signed in...
