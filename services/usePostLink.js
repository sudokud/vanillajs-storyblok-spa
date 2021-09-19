// fetch all posts links 
// and return an array of links
import Storyblok from './storyblok'


/**
 * 
 * @param {string} starts_with
 * @returns {Object} array that contains all links that starts with the starts_with param
*/

const usePostLink = async (starts_with) => {
    const result = await Storyblok.get('cdn/links/', {
      "starts_with": "posts/"
    })
    return Object.values(result?.data?.links) || {}
}

export default usePostLink