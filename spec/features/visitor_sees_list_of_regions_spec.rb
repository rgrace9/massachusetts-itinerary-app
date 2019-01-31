require 'rails_helper'

feature "visitor sees a list of all regions" do
  scenario "sees a list of regions" do
    region_1 = Region.create(name: "Great Boston Area")
    region_2 = Region.create(name: "Berkshire")

    visit regions_path

    expect(page).to have_content region_1.name
    expect(page).to have_link region_2.name
  end
end
