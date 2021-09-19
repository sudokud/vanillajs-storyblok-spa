// 1. Require the Storyblok client
import  StoryblokClient from 'storyblok-js-client';

// 2. Initialize the client with the preview token
// from your space dashboard at https://app.storyblok.com

const STORYBLOK_API_KEY = import.meta.env.VITE_STORYBLOK_API_KEY;

let Storyblok = new StoryblokClient({
  accessToken: STORYBLOK_API_KEY,
  cache: {
    clear: 'auto',
    type: 'memory'
  }
})

export default Storyblok