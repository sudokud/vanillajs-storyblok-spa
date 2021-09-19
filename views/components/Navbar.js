import useAllLinks from "../../services/useAllLinks";

const Navbar = {
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
          /*html*/ `<div class="nav-item px-2"><a class="nav-link" href="/#/${link.name}">${link.name}</a></div>`
      )
      .join('\n');
    return /*html*/ `
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <div class="navbar-brand">  
              <a href="/#/home">
                <img class="logo" src="https://a.storyblok.com/f/125523/x/221d829cb8/storyblok-primary.svg" alt="Workflow">
              </a>
            </div>
            <div class="navbar-nav d-flex flex-row">
              ${navLinks}
            </div>
        </div>
      </nav>
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

export default Navbar;
