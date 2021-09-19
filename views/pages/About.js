import useStory from "../../services/useStory";

const About = {
  /**
   * Render the page content.
   */
  render: async () => {
    const story = await useStory('/pages/about/');
    const {content} = await story
    return /*html*/ `
      <section class="about-section">
        <h1 class="text-center">${content.body[0].content}</h1>
      </section>
    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async () => {}
};
export default About;
