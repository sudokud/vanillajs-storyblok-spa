import useAllLinks from "../../services/useAllLinks";

const Footer = {
  /**
   * Render the component content.
   */
  render: async () => {
    // Define a list of navbar links.
    const links = await useAllLinks();
    // Build html with navigation links.
    const navLinks = links
      .map(
        link =>
          /*html*/ `<div class="nav-item"><a class="nav-link" href="/#/${link.name}">${link.name}</a></div>`
      )
      .join('\n');
    return /*html*/ `
    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p class="col-md-4 mb-0 text-muted">© 2021 story, Inc</p>
        <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <img src="https://a.storyblok.com/f/125523/x/221d829cb8/storyblok-primary.svg" height="31px" alt="storyblok"/>
        </a>
        <ul class="nav d-flex flex-row col-md-4 justify-content-end">
          ${navLinks}
        </ul>
      </footer>
    </div>
    `;
  },
  /**
   * All the code related to DOM interactions and controls go in here.
   * This is a separate call as these can be registered only after the DOM has been painted.
   */
  after_render: async () => {
     // logic for the active link state
    // check if the link item href match the location
    // if yes add active classname to link item
    // else return
    const currentLocation = '/' + document.location.hash;
    let linkItems = document.querySelectorAll('.nav-link')
    linkItems.forEach(elm => {
      if(elm.getAttribute('href') === currentLocation){
        elm.classList.add('active')
      }
      return;
    })
    
  }
};

export default Footer;
