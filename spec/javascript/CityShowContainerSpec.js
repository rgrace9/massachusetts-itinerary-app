// import CityShowContainer from "../../app/javascript/react/containers/CityShowContainer";
// import fetchMock from "fetch-mock";
//
// describe("CityShowContainer", () => {
//   let wrapper;
//   let params;
//   let podcast;
//
//   beforeEach(() => {
//     params = { id: 1 };
//     let response = {
//       data: [
//         {
//           name: "Gaslight",
//           image:
//             "https://s3-media1.fl.yelpcdn.com/bphoto/yFNEqVykFaGdc9wzykyQqw/o.jpg",
//           url:
//             "https://www.yelp.com/biz/gaslight-brasserie-boston-5?adjust_creative=VUX__qw50dXM0EzK3dj30Q&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=VUX__qw50dXM0EzK3dj30Q",
//           categories: [
//             {
//               alias: "french",
//               title: "French"
//             },
//             {
//               alias: "newamerican",
//               title: "American (New)"
//             },
//             {
//               alias: "cocktailbars",
//               title: "Cocktail Bars"
//             }
//           ],
//           price: "$$",
//           coordinates: {
//             latitude: 42.3409677894859,
//             longitude: -71.0673901926598
//           },
//           city: "Boston",
//           display_address: ["560 Harrison Ave", "Boston, MA 02118"]
//         }
//       ]
//     };
//     fetchMock.get("/api/v1/podcasts/1", {
//       status: 200,
//       body: podcast
//     });
//
//     wrapper = mount(<PodcastShowContainer params={params} />);
//   });
//
//   afterEach(fetchMock.restore);
//
//   it("renders the image of the podcast", done => {
//     setTimeout(() => {
//       expect(wrapper.find("img").props()).toEqual({
//         className: "podcast-show-image",
//         src:
//           "https://s3.amazonaws.com/podcast-review-app-development/podcast-images/thedaily.png"
//       });
//       done();
//     }, 0);
//   });
//
//   it("renders the name of the podcast", done => {
//     setTimeout(() => {
//       expect(wrapper.find("h2").text()).toBe("The Daily");
//       done();
//     }, 0);
//   });
//
//   it("renders the description of the podcast", done => {
//     setTimeout(() => {
//       expect(wrapper.find("h3").text()).toBe(
//         "This is how the news should sound. Twenty minutes a day, five days a week, hosted by Michael Barbaro and powered by New York Times journalism."
//       );
//       done();
//     }, 0);
//   });
//
//   it("renders the publisher of the podcast", done => {
//     setTimeout(() => {
//       expect(
//         wrapper
//           .find("p")
//           .first()
//           .text()
//       ).toBe("Publisher: The New York Times");
//       done();
//     }, 0);
//   });
//
//   it("renders the link to the podcast", done => {
//     setTimeout(() => {
//       expect(wrapper.find("a").props()).toEqual({
//         id: "podcast-show-link",
//         href: "https://www.nytimes.com/column/the-daily",
//         children: "Visit Website"
//       });
//       done();
//     }, 0);
//   });
// });
