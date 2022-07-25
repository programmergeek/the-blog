import React, { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../client";
import { block } from "../../Components/Blocks/types";
import { NavBar } from "../../Components/Nav-bar/NavBar";
import { Tags } from "../../Components/Tag/Tags";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { useParams } from "react-router-dom";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
export const Articles: React.FC = () => {
  const [postData, updatePostData] = useState<any>(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
        title,
        slug,
        categories,
        mainImage{
          asset->{
            _id,
            url
          }
        },
        body,
        "name": author->name
      }`,
        { slug }
      )
      .then((data) => updatePostData(data[0]))
      .catch(console.log);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <NavBar>
      <div className="article h-fit">
        <div className="left-gutter"></div>
        <div className="article-content">
          <section className="article-header mb-4 w-fit">
            <h1 className="text-5xl lg:text-8xl text-black font-bold mb-4">
              {postData.title}
            </h1>
            <Tags tags={["CSS", "Front-end", "Web Dev"]} />
          </section>
          <img
            src={urlFor(postData.mainImage).url()}
            alt=""
            className="rounded-md mx-auto"
          />
          <section className="article-body pt-4"></section>
        </div>
        <div className="right-gutter"></div>
      </div>
    </NavBar>
  );
};

const testData: block[] = [
  {
    type: "header",
    content: [
      {
        content: "Header",
      },
    ],
  },
  {
    type: "sub-header",
    content: [
      {
        content: "Sub-header",
      },
    ],
  },
  {
    type: "normal",
    content: [
      {
        content:
          "Suspendisse in est felis. Phasellus purus nisi, pretium sit amet rhoncus a, venenatis id sapien. ",
        type: "bold",
      },
      {
        content: "Suspendisse in dapibus lectus. ",
        type: "link",
        link: "https://google.com",
      },
      {
        content:
          "Vestibulum convallis, justo porttitor tristique pretium, massa orci scelerisque dui, quis dignissim nisi libero sit amet libero. ",
        type: "italic",
      },
      {
        content:
          "Etiam non nulla vel nulla finibus scelerisque vitae quis justo. ",
        type: "underline",
      },
      { content: "Fusce rhoncus viverra egestas. " },
    ],
  },
  {
    type: "image",
    content: [
      {
        content: "https://picsum.photos/700",
        link: "https://picsum.photos/700",
      },
    ],
  },
];
