require 'rails_helper'

feature "visitor sees region show page" do
  scenario "sees region show page" do
    region_1 = Region.create(name: "Great Boston Area", image: "image_url")
    region_2 = Region.create(name: "Berkshire", image: "image_url")
    city_1 = City.create(name: "Brookline", region: region_1, image: "city_image_url")
    visit regions_path

    click_link(region_1.name)

    expect(page).to have_content region_1.name
    expect(page).to have_css("img[src*='#{city_1.image}']")
    expect(page).not_to have_content region_2.name
  end
end
