require 'rails_helper'
require 'http'

RSpec.describe Api::V1::ExcursionsController, type: :controller do
  describe 'GET#search' do

    before(:each) do
      http = double
      response = double
      test_data = {"businesses"=>
        [{"id"=>"loARYRGAZiQd7NxLTxURlQ",
          "alias"=>"sycamore-newton",
          "name"=>"Sycamore",
          "image_url"=>"https://s3-media1.fl.yelpcdn.com/bphoto/xEuFEMEFeV1amBxDrJqYqw/o.jpg",
          "is_closed"=>false,
          "url"=>
          "https://www.yelp.com/biz/sycamore-newton?adjust_creative=VUX__qw50dXM0EzK3dj30Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=VUX__qw50dXM0EzK3dj30Q",
          "review_count"=>219,
          "categories"=>[{"alias"=>"newamerican", "title"=>"American (New)"}, {"alias"=>"french", "title"=>"French"}],
          "rating"=>4.5,
          "coordinates"=>{"latitude"=>42.3306767592034, "longitude"=>-71.1916864637311},
          "transactions"=>[],
          "price"=>"$$$",
          "location"=>
          {"address1"=>"755 Beacon St",
            "address2"=>"",
            "address3"=>"",
            "city"=>"Newton",
            "zip_code"=>"02459",
            "country"=>"US",
            "state"=>"MA",
            "display_address"=>["755 Beacon St", "Newton, MA 02459"]},
            "phone"=>"+16172444445",
            "display_phone"=>"(617) 244-4445",
            "distance"=>1188.6282803942572}]}
            url = "https://api.yelp.com/v3/businesses/search"
            params = {
              term: nil,
              location: "Newton, MA",
              limit: 10
            }
            allow(HTTP).to receive(:auth).with("Bearer #{ENV["YELP_API_KEY"]}").and_return(http)
            allow(http).to receive(:get).with(url, params: params).and_return(response)
            allow(response).to receive(:parse).and_return(test_data)

          end

          let!(:greater_boston) { Region.create!(name: "Greater Boston Area", image: "https://s3.amazonaws.com/massachusetts-itinerary-app-development/boston-01.jpg") }
          let!(:newton) { City.create!(name: "Newton", region: greater_boston) }

          it 'returns Yelp data for the selected city' do
            get :search, params: { city_id: newton.id}

            expect(response.status).to eq 200
            expect(response.content_type).to eq 'application/json'
          end

          it 'returns businesses for Newton from Yelp API' do
            get :search, params: { city_id: newton.id}
            returned_json = JSON.parse(response.body)
            expect(returned_json["data"][0]["name"]).to eq "Sycamore"

          end
        end
      end
