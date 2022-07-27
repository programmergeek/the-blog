import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

/* Gets image url from sanity server */
const builder = imageUrlBuilder(sanityClient);
export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
