require 'rails_helper'

feature "visitor sees a list of all regions" do
  scenario "sees a list of regions" do
    region_1 = Region.create(name: "Great Boston Area", image: "image_url")
    region_2 = Region.create(name: "Berkshire", image: "image_url")

    visit regions_path

    expect(page).to have_content region_1.name
    expect(page).to have_css("img[src*='#{region_1.image}']")
  end
end
