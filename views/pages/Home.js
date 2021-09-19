import useStory from "../../services/useStory";

const Home = {
  /**
   * Render the page content.
   */
  render: async () => {
    const story = await useStory('pages');

      return `<section class="home-section container-fluid">
        <div class="container-lg py-5">
          <div class="row">
            <div class="col-12 col-md-7">
              <h1>${story.content.body[0].content}</h1>
              <h5 class="px-2 mt-3">${story.content.body[1].content}</h5>
              <div class="px-2 mt-5">
                <a class="btn btn-primary btn-lg" href="#">${story.content.body[2].content}</a>
              </div>
            </div>
            <div class="col-12 col-md-5">
              <img width="100%" src="${story.content.body[3].image.filename}" />
            </div>
          </div>
        </div>
      </section>
    `
    ;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async () => {}
};
export default Home;
