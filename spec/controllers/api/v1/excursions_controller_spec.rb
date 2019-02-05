require 'rails_helper'

RSpec.describe Api::V1::ExcursionsController, type: :controller do
  describe 'GET#search' do
    let!(:greater_boston) { Region.create!(name: "Greater Boston Area", image: "https://s3.amazonaws.com/massachusetts-itinerary-app-development/boston-01.jpg") }
    let!(:newton) { City.create!(name: "Newton", region: greater_boston) }

    it 'returns Yelp data for the selected city' do
      get :search, params: { city_id: newton.id}

      expect(response.status).to eq 200
      expect(response.content_type).to eq 'application/json'
    end

    it 'returns businesses for Newton from Yelp API' do

    end
  end
end
