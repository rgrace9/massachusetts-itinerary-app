# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
greater_boston = Region.create(name: "Greater Boston Area", image: "https://s3.amazonaws.com/massachusetts-itinerary-app-development/boston-01.jpg")

western = Region.create(name: "Western", image: "https://s3.amazonaws.com/massachusetts-itinerary-app-development/berskhires_road.jpg")

central = Region.create(name: "Central", image: "https://s3.amazonaws.com/massachusetts-itinerary-app-development/1200px-Bankroft_Tower_central_ma.jpg")

northeast = Region.create(name: "Northeast", image: "https://s3.amazonaws.com/massachusetts-itinerary-app-development/salem.jpg")

cape = Region.create(name: "Cape & Islands", image: "https://s3.amazonaws.com/massachusetts-itinerary-app-development/marthasvineyardlighthouse.jpg")

southeast = Region.create(name: "Southeast", image: "https://s3.amazonaws.com/massachusetts-itinerary-app-development/massachusetts-plymouth.jpg")


city_list = [
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

greater_boston_cities = [
  ["Boston", greater_boston, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/boston_tile.jpeg"],
  ["Newton", greater_boston, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/newton-tile2.JPG"],
  ["Cambridge", greater_boston, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/cambridge-tile.jpg"],
  ["Brookline", greater_boston, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/brookline-tile.jpg"],
  ["Arlington", greater_boston, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/arlington-tile2.jpg"],
  ["Somerville", greater_boston, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/somerville-tile.jpg"],
  ["Needham", greater_boston, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/needham-tile.jpg"],
  ["Foxborough", greater_boston, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/foxborough-tile2.jpg"],
  ["Lexington", greater_boston, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/lexington-tile.jpg"],
]
greater_boston_cities.each do |name, region, image|
  City.create(name: name, region: region, image: image)
end

user_list = [
  [ "rob@test.com", "password", "password", "https://s3.amazonaws.com/massachusetts-itinerary-app-development/prof-pic-man-2.png", "Rob", "Smith" ],

  [ "bill@test.com", "password", "password", "https://s3.amazonaws.com/massachusetts-itinerary-app-development/prof-pic-man.png", "Bill", "Jackson" ],

  [ "jen@test.com", "password", "password", "https://s3.amazonaws.com/massachusetts-itinerary-app-development/prof-pic-woman.jpeg", "Jenny", "Adams" ],

  [ "emily@test.com", "password", "password", "https://s3.amazonaws.com/massachusetts-itinerary-app-development/no-photo.jpg", "Emily", "Roberts" ]
]

user_list.each do |email, password, password_confirmation, profile_photo, first_name, last_name|
  User.create( email: email, password: password, password_confirmation: password_confirmation, profile_photo: { url: profile_photo}, first_name: first_name, last_name: last_name )
end
