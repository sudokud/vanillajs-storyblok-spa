// fetch all stories links 
// and return an array of links
import Storyblok from './storyblok'


/**
 * 
 * @returns {Object} array that contains all links that starts with the starts_with param
*/



const useAllLinks = async () => {
    const result = await Storyblok.get('cdn/links',{
        "starts_with": "pages/"
    })
    const links = Object.values(result?.data?.links);
    // var found = links.filter(link => {
    //     return link.is_folder === true  || link.path === "about" || link.path === "/" ;
    // });
    // return found || []
    return links;
}

export default useAllLinks