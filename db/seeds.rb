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

southeast = Region.create(name: "Southeast", image: "https://s3.amazonaws.com/massachusetts-itinerary-app-development/plymouth-region-tile.jpg")


city_list = [
  ["Boston", greater_boston, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/boston_tile.jpeg"],
  ["Newton", greater_boston, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/newton-tile2.JPG"],
  ["Cambridge", greater_boston, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/cambridge-tile2.jpg"],
  ["Brookline", greater_boston, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/brookline-tile.jpg"],
  ["Arlington", greater_boston, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/arlington-tile3.jpg"],
  ["Somerville", greater_boston, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/somerville-tile.jpg"],
  ["Needham", greater_boston, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/needham-region-tile2.jpg"],
  ["Foxborough", greater_boston, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/foxborough-tile2.jpg"],
  ["Lexington", greater_boston, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/lexington-tile3.jpg"],
  ["Springfield", western, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/springfield-tile.jpg"],
  ["Williamstown", western, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/williamstown-tile.JPG"],
  ["Stockbridge", western, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/stockbridge-tile.jpg"],
  ["Pittsfield", western, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/pittsfield-tile.jpg"],
  ["Lenox", western, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/lenox-tile.jpg"],
  ["Great Barrington", western, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/great-barrington-tile.jpg"],
  ["Worcester", central, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/worcester-tile.jpg"],
  ["Boylston", central, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/west-boylston-tile.jpg"],
  ["Sutton", central, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/sutton-tile.jpg"],
  ["Sturbridge", central, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/sturbridge-tile.jpg"],
  ["Bolton", central, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/bolton-tile2.JPG"],
  ["Gloucester", northeast, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/gloucester-tile.jpeg"],
  ["Lawrence", northeast, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/lawrence-tile.jpg"],
  ["Lowell", northeast, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/lowell-ma.jpg"],
  ["Rockport", northeast, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/rockport-tile.jpg"],
  ["Salem", northeast, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/salem-tile.jpg"],
  ["Hyannis", cape, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/hyannis.jpg"],
  ["Provincetown", cape, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/provincetown-ma.jpg"],
  ["Falmouth", cape, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/falmouth-tile.jpg"],
  ["Nantucket", cape, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/nantucket-tile.jpeg"],
  ["Martha's Vineyard", cape, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/vineyard-tile.jpg"],
  ["Plymouth", southeast, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/plymouth-tile.jpg"],
  ["Abington", southeast, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/abington-tile.jpg"],
  ["Attleboro", southeast, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/attleboro-tile.jpg"],
  ["Avon", southeast, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/avon-tile.jpg"],
  ["Wrentham", southeast, "https://s3.amazonaws.com/massachusetts-itinerary-app-development/cities/wrentham-tile.jpg"]
]
city_list.each do |name, region, image|
  City.create(name: name, region: region, image: image)
end

locations = [
"Acushnet Center",
"Adams",
"Agawam",
"Amesbury",
"Amherst Center",
"Andover",
"Arlington",
"Athol",
"Attleboro",
"Ayer",
"Baldwinville",
"Barnstable Town",
"Barre",
"Belchertown",
"Bellingham",
"Belmont",
"Beverly",
"Bliss Corner",
"Bondsville",
"Boston",
"Bourne",
"Boxford",
"Braintree",
"Brewster",
"Bridgewater",
"Brockton",
"Brookline",
"Burlington",
"Buzzards Bay",
"Cambridge",
"Chatham",
"Chelsea",
"Chicopee",
"Clinton",
"Cochituate",
"Cordaville",
"Danvers",
"Dedham",
"Dennis",
"Dennis Port",
"Dover",
"Duxbury",
"East Brookfield",
"East Dennis",
"East Douglas",
"East Falmouth",
"Easthampton",
"East Harwich",
"East Pepperell",
"East Sandwich",
"Essex",
"Everett",
"Fall River",
"Falmouth",
"Fiskdale",
"Fitchburg",
"Forestdale",
"Fort Devens",
"Foxborough",
"Framingham",
"Franklin",
"Gardner",
"Gloucester",
"Granby",
"Great Barrington",
"Greenfield",
"Green Harbor-Cedar Crest",
"Groton",
"Hanson",
"Harwich Center",
"Harwich Port",
"Hatfield",
"Haverhill",
"Hingham",
"Holbrook",
"Holland",
"Holyoke",
"Hopedale",
"Hopkinton",
"Housatonic",
"Hudson",
"Hull",
"Ipswich",
"Kingston",
"Lawrence",
"Lee",
"Lenox",
"Leominster",
"Lexington",
"Littleton Common",
"Longmeadow",
"Lowell",
"Lunenburg",
"Lynn",
"Lynnfield",
"Malden",
"Mansfield Center",
"Marblehead",
"Marion Center",
"Marlborough",
"Marshfield",
"Marshfield Hills",
"Mashpee Neck",
"Mattapoisett Center",
"Maynard",
"Medfield",
"Medford",
"Melrose",
"Methuen",
"Middleborough Center",
"Milford",
"Millers Falls",
"Millis-Clicquot",
"Milton",
"Monomoscoy Island",
"Monson Center",
"Monument Beach",
"Nahant",
"Nantucket",
"Needham",
"New Bedford",
"Newburyport",
"New Seabury",
"Newton",
"North Adams",
"North Amherst",
"Northampton",
"North Attleborough Center",
"Northborough",
"North Brookfield",
"North Eastham",
"North Falmouth",
"Northfield",
"North Lakeville",
"North Pembroke",
"North Plymouth",
"North Scituate",
"North Seekonk",
"Northwest Harwich",
"North Westport",
"Norton Center",
"Norwood",
"Ocean Bluff-Brant Rock",
"Ocean Grove",
"Onset",
"Orange",
"Orleans",
"Oxford",
"Palmer",
"Peabody",
"Pepperell",
"Pinehurst",
"Pittsfield",
"Plymouth",
"Pocasset",
"Popponesset",
"Popponesset Island",
"Provincetown",
"Quincy",
"Randolph",
"Raynham Center",
"Reading",
"Revere",
"Rockport",
"Rowley",
"Rutland",
"Sagamore",
"Salem",
"Salisbury",
"Sandwich",
"Saugus",
"Scituate",
"Seabrook",
"Seconsett Island",
"Sharon",
"Shelburne Falls",
"Shirley",
"Smith Mills",
"Somerset",
"Somerville",
"South Amherst",
"South Ashburnham",
"Southbridge",
"South Deerfield",
"South Dennis",
"South Duxbury",
"South Lancaster",
"South Yarmouth",
"Spencer",
"Springfield",
"Stoneham",
"Sturbridge",
"Swampscott",
"Taunton",
"Teaticket",
"Three Rivers",
"Topsfield",
"Townsend",
"Turners Falls",
"Upton-West Upton",
"Vineyard Haven",
"Wakefield",
"Walpole",
"Waltham",
"Ware",
"Wareham Center",
"Warren",
"Watertown",
"Webster",
"Wellesley",
"Westborough",
"West Brookfield",
"West Chatham",
"West Concord",
"West Dennis",
"West Falmouth",
"Westfield",
"West Springfield",
"West Wareham",
"West Yarmouth",
"Weweantic",
"Weymouth",
"White Island Shores",
"Whitinsville",
"Wilbraham",
"Williamstown",
"Wilmington",
"Winchendon",
"Winchester",
"Winthrop",
"Woburn",
"Woods Hole",
"Worcester",
"Yarmouth Port"
]

locations.each do |name|
  Location.create(name: name)
end
