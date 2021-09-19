import Storyblok from "./storyblok"
/**
 * 
 * @param {string} story_path
 * @returns {Object}
 */

const useStory = async (story_path) => {
  try {
    const response = await Storyblok
    .get(`cdn/stories/${story_path}/`)
    const { story } = await response.data;
    return story;

  } catch (err) {
    console.log('Error getting documents', err)
  }
}
export default useStory
