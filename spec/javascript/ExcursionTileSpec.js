import ExcursionTile from "../../app/javascript/react/containers/ExcursionTile";
import fetchMock from "fetch-mock";

describe("ExcursionTile", () => {
  let wrapper;
  let params;
  let excursion;

  beforeEach(() => {
    params = { id: 1 };
    let excursion = {
      business: {
        business_id: "y2w6rFaO0XEiG5mFfOsiFA",
        city: "Boston",
        display_address: "63 Salem St, Boston, MA 02113",
        image:
          "https://s3-media1.fl.yelpcdn.com/bphoto/u4Lkf6hAjqIVUjEdO6f0Kw/o.jpg",
        latitude: 42.3632711771092,
        longitude: -71.0560575975533,
        name: "Neptune Oyster",
        price: "$$$",
        url:
          "https://www.yelp.com/biz/neptune-oyster-boston?adjust_creative=VUX__qw50dXM0EzK3dj30Q&utm_campaign"
      }
    };
    fetchMock.get("/api/v1/cities/1/excursions/1", {
      status: 200,
      body: response
    });

    wrapper = mount(<ExcursionTile params={params} />);
  });

  afterEach(fetchMock.restore);

  it("renders the image of the excursion", done => {
    setTimeout(() => {
      expect(wrapper.find("img").props()).toEqual({
        src:
          "https://s3-media1.fl.yelpcdn.com/bphoto/u4Lkf6hAjqIVUjEdO6f0Kw/o.jpg"
      });
      done();
    }, 0);
  });
});
