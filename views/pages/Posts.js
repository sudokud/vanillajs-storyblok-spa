/**
 * Fetch data from external API.
 * @return {Array} Data fetched.
 */

import Storyblok from "../../services/storyblok"
import useStory from  "../../services/useStory"

 let getPosts = async () => {
  try {
    const response = await Storyblok
    .get('cdn/stories', {
      version: 'draft',
      "starts_with": "posts/"
    })
    const {stories} = response.data;
    return stories;

  } catch (err) {
      console.log('Error getting documents', err)
  }
 }
 

const Items = {
  /**
   * Render the page content.
   */
  render: async () => {
    // Get items data.
    const blogPosts = await getPosts();
    const PostsPageStory = await useStory('/pages/posts');
    console.log("PostsPageStory", PostsPageStory);
    // Map over items and build card components.
    const blogPostsList = blogPosts
      .map(
        (post) => /*html*/ `
        <div class="col col-md-6 col-lg-4">
          <div class="card-group d-flex justify-content-center">
            <div class="card my-3">
              <a class="card-link" href="/#/${post.full_slug}">
                <img src=${post.content.image} class="card-img-top card-image" alt=${post.content.title}>
                <div class="card-body">
                  <h6 class="tag ${post.tag_list[0]}">${post.tag_list[0]}</h6>
                  <h5 class="">${post.content.title}</h5>
                  <p class="">${post.content.intro.split(" ").splice(0,11).join(" ")}...</p>
                </div>
              </a>
            </div>
          </div>
        </div/>
      `
      )
      .join('\n');
    return /*html*/ `
      <section class="section_container container-fluid py-5">
        <div class="container-sm text-center headers-container">
          <h1 class="header">${PostsPageStory.content.body[0].content}</h1>
          <h5 class="subheader">${PostsPageStory.content.body[1].content}</h5>
        </div>
        <div class="container-lg py-5">
          <div class="row">
            ${blogPostsList}
          </div>
        </div>
      </section>  
    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async () => {}
};

export default Items;
