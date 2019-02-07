import CityShowContainer from "../../app/javascript/react/containers/CityShowContainer";
import fetchMock from "fetch-mock";

describe("CityShowContainer", () => {
  let wrapper;
  let params;
  let response;

  beforeEach(() => {
    params = { id: 1 };
    let response = {
      data: [
        {
          id: 1,
          name: "Gaslight",
          image:
            "https://s3-media1.fl.yelpcdn.com/bphoto/yFNEqVykFaGdc9wzykyQqw/o.jpg",
          url:
            "https://www.yelp.com/biz/gaslight-brasserie-boston-5?adjust_creative=VUX__qw50dXM0EzK3dj30Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=VUX__qw50dXM0EzK3dj30Q",
          categories: [
            {
              alias: "french",
              title: "French"
            },
            {
              alias: "newamerican",
              title: "American (New)"
            },
            {
              alias: "cocktailbars",
              title: "Cocktail Bars"
            }
          ],
          price: "$$",
          coordinates: {
            latitude: 42.3409677894859,
            longitude: -71.0673901926598
          },
          city: "Boston",
          display_address: ["560 Harrison Ave", "Boston, MA 02118"]
        }
      ]
    };
    fetchMock.get("/api/v1/cities/1/excursions", {
      status: 200,
      body: response
    });

    wrapper = mount(<CityShowContainer params={params} />);
  });

  afterEach(fetchMock.restore);
});
