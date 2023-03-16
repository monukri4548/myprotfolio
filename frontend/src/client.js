import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: 'uoqg8kde',
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: 'skQDBaAJse4lgnLga3gudar0slEXartCpD1dJlNFV8bYkqdK6ZlALB1pKCqEt3ZHOQl3SLtk3mAAs61Zo5JOM47IM8J0lUygu7HoY9M6vj7KocmYpzt1n8EjiYwTEVflIwIfjW9y01o7OprWsU9uylEHNjIwDCFNCRLh5VC1vN46yMQHKgyV',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
