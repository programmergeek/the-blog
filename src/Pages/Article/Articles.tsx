import React, { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../../client";
import { NavBar } from "../../Components/Nav-bar/NavBar";
import { Tags } from "../../Components/Tag/Tags";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";

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

  useEffect(() => console.log(postData), [postData]);

  if (!postData) return <div>Loading...</div>;

  return (
    <NavBar>
      <div className="article h-fit">
        <div className="article-content">
          <section className="article-header mb-4 w-fit">
            <h1 className="text-4xl  sm:text-5xl lg:text-8xl text-black font-bold mb-4">
              {postData.title}
            </h1>
            <Tags tags={["CSS", "Front-end", "Web Dev"]} />
          </section>
          <img
            src={urlFor(postData.mainImage).height(800).url()}
            alt=""
            className="rounded-md mx-auto"
          />
          <section className="article-body px-4 2xl:px-24 ">
            <PortableText
              value={postData.body}
              components={{
                block: {
                  h2: ({ value }) => (
                    <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl text-black font-semibold my-3">
                      {value.children[0].text}
                    </h1>
                  ),

                  h3: ({ value }) => (
                    <h2 className="text-2xl md:text-3xl lg:text-5xl text-black font-semibold my-2">
                      {value.children[0].text}
                    </h2>
                  ),

                  normal: ({ value }) => (
                    <p className="my-5">
                      {/*check for and add any bold un */}
                      {value.children.map((text) => {
                        switch (text.marks[0]) {
                          case "strong":
                            return (
                              <span className="font-semibold">{text.text}</span>
                            );

                          case "underline":
                            return (
                              <span className="underline"> {text.text} </span>
                            );

                          case "italic":
                            return (
                              <span className="italic"> {text.text} </span>
                            );

                          default:
                            return text.text;
                        }
                      })}
                    </p>
                  ),
                },
                types: {
                  image: ({ value }) => (
                    <img
                      src={urlFor(value.asset._ref).width(500).url()}
                      alt=""
                      className="rounded-md mx-auto my-12"
                    />
                  ),
                },
              }}
            />
          </section>
        </div>
      </div>
    </NavBar>
  );
};
