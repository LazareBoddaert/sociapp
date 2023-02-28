import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-02-20',
  token: process.env.REACT_APP_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true // THIS IS A SECURITY PROBLEM
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
