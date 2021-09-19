// Import utils to extract id from url.
import { parseRequestUrl } from '../../services/utils.js';
import Storyblok from "../../services/storyblok"

let getPost = async (slug) => {
  try {
  const response = await Storyblok
  .get(`cdn/stories/posts/${slug}`, {
    version: 'published',
  })
  console.log("response", response);
  const {story} = response.data;
  return story;

  } catch (err) {
    console.log('Error getting documents', err)
  }
}
function formatDate(date) {
  let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}

const Post = {
  /**
   * Render the page content.
   */
  render: async () => {
    // Get current URL params.
    const params = parseRequestUrl();
    // Get destructured data from API based on id provided.
    const {content, published_at} = await getPost(
      params.id
    );
    return /*html*/ `
      <section class="container-fluid py-5 mt-5">
        <article class="article d-flex flex-column align-items-center">
          <h1 class="title text-center">${content.title}</h1>
          <div class="content">
            <div class="d-flex justify-content-center pt-4">
              <img src="${content.image}" class="img-fluid"  alt="article image">
            </div>
            <div class="mt-4">
              <div class="author d-flex flex-row align-items-center mb-5">
                <img class="avatar" src="${content.author[0].avatar.filename}" />
                <div class="d-flex flex-column mx-3">
                  <p class="name mb-0">${content.author[0].name}</p>
                  <a class="twitterUsername" href="https://twitter.com/${content.author[0].twitter}">${content.author[0].twitter}</a>
                </div>
              </div>
              <p>published: ${formatDate(published_at)}</p>
              <p>${content.intro}.</p>
              <p>${Storyblok.richTextResolver.render(content.long_text)}</p>
            </div>
          </div>
        </article>
      </section>
    `;
  },
  // All the code related to DOM interactions and controls go in here.
  // This is a separate call as these can be registered only after the DOM has been painted.
  after_render: async () => {
    // Add event listener with a simple alert.
    document
      .querySelector('#characterImage')
      .addEventListener('click', () => alert('You have clicked on the photo!'));
  }
};

export default Post;
