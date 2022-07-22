import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "lrnw8pey",
  dataset: "production",
  useCdn: true,
});
