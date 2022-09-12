import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: "21eqd58b",
    dataset: 'production',
    apiVersion: '2022-10-21',
    useCdn: 'true',
   
})
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);