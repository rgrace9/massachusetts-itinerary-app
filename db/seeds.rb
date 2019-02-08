# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
greater_boston = Region.create(name: "Greater Boston Area", image: "https://s3.amazonaws.com/massachusetts-itinerary-app-development/boston-01.jpg")

western = Region.create(name: "Western", image: "https://s3.amazonaws.com/massachusetts-itinerary-app-development/berkshires.jpeg")

central = Region.create(name: "Central", image: "https://s3.amazonaws.com/massachusetts-itinerary-app-development/1200px-Bankroft_Tower_central_ma.jpg")

northeast = Region.create(name: "Northeast", image: "https://s3.amazonaws.com/massachusetts-itinerary-app-development/northeast_ma.jpg")

cape = Region.create(name: "Cape & Islands", image: "https://s3.amazonaws.com/massachusetts-itinerary-app-development/marthas-vineyard.jpg")

southeast = Region.create(name: "Southeast", image: "https://s3.amazonaws.com/massachusetts-itinerary-app-development/massachusetts-plymouth.jpg")


city_list = [
  ["Boston", greater_boston],
  ["Newton", greater_boston],
  ["Cambridge", greater_boston],
  ["Brookline", greater_boston],
  ["Arlington", greater_boston],
  ["Somerville", greater_boston],
  ["Needham", greater_boston],
  ["Foxborough", greater_boston],
  ["Lexington", greater_boston],
  ["Springfield", western],
  ["Williamstown", western],
  ["Stockbridge", western],
  ["Lenox", western],
  ["Great Barrington", western],
  ["Worcester", central],
  ["Boylston", central],
  ["Sutton", central],
  ["Sturbridge", central],
  ["Bolton", central],
  ["Gloucester", northeast],
  ["Lawrence", northeast],
  ["Lowell", northeast],
  ["Rockport", northeast],
  ["Salem", northeast],
  ["Hyannis", cape],
  ["Provincetown", cape],
  ["Falmouth", cape],
  ["Nantucket", cape],
  ["Martha's Vineyard", cape],
  ["Plymouth", southeast],
  ["Abington", southeast],
  ["Attleboro", southeast],
  ["Avon", southeast],
  ["Wrentham", southeast]
]
city_list.each do |name, region|
  City.create(name: name, region: region)
end


user_list = [
  [ "rob@test.com", "password", "password", "Rob", "Smith" ],
  [ "bill@test.com", "password", "password", "Bill", "Jackson" ],
  [ "jen@test.com", "password", "password", "Jenny", "Adams" ],
  [ "emily@test.com", "password", "password", "Emily", "Roberts" ]
]

user_list.each do |email, password, password_confirmation, first_name, last_name|
  User.create( email: email, password: password, password_confirmation: password_confirmation, first_name: first_name, last_name: last_name )
end
