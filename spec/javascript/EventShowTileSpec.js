import EventShowTile from "../../app/javascript/react/components/EventShowTile";
import fetchMock from "fetch-mock";

describe("EventShowTile", () => {
  let wrapper;
  let params;
  let event;

  beforeEach(() => {
    let event = {
      id: 1,
      start_event_time: "1:00 PM",
      start_event_day: "Friday, February 15, 2019",
      start_day_time: "2019-02-15T13:00:00.000-05:00",
      business_id: 1,
      business: {
        id: 1,
        yelp_business_id: "y2w6rFaO0XEiG5mFfOsiFA",
        name: "Neptune Oyster",
        image:
          "https://s3-media1.fl.yelpcdn.com/bphoto/u4Lkf6hAjqIVUjEdO6f0Kw/o.jpg",
        url:
          "https://www.yelp.com/biz/neptune-oyster-boston?adjust_creative=VUX__qw50dXM0EzK3dj30Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=VUX__qw50dXM0EzK3dj30Q",
        price: "$$$",
        latitude: "42.3632711771092",
        longitude: "-71.0560575975533",
        city: "Boston",
        display_address: "63 Salem St, Boston, MA 02113",
        created_at: "2019-02-16T14:32:32.563-05:00",
        updated_at: "2019-02-16T14:32:32.563-05:00"
      }
    };
    wrapper = mount(<EventShowTile event={event} />);
  });

  it("renders the name of the business", () => {
    expect(wrapper.find("h2").text()).toBe("Neptune Oyster");
  });

  it("renders the address of the business", () => {
    expect(wrapper.find("h3").text()).toBe("63 Salem St, Boston, MA 02113");
  });

  it("renders the day of the event", () => {
    expect(
      wrapper
        .find("h4")
        .first()
        .text()
    ).toBe("Friday, February 15, 2019");
  });

  it("renders the time of the event", () => {
    expect(
      wrapper
        .find("h4")
        .last()
        .text()
    ).toBe("1:00 PM");
  });
});
