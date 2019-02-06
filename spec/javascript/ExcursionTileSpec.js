import ExcursionTile from "../../app/javascript/react/components/ExcursionTile";
import fetchMock from "fetch-mock";

describe("ExcursionTile", () => {
  let wrapper;


  beforeEach(() => {

    let business = {
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


    wrapper = mount(<ExcursionTile business={business} />);
  });


  it("renders a h2 tag with the name of the business", () => {
    expect(wrapper.find("h1").text()).toBe("Gaslight");
  });

  it("renders am img tag with a picture of the business", () => {
    expect(wrapper.find("img").props()).toEqual({
        src: "https://s3-media1.fl.yelpcdn.com/bphoto/yFNEqVykFaGdc9wzykyQqw/o.jpg",
        width: "400"
      });
  });

});
