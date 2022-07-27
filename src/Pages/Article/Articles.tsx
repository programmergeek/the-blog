import React, { useEffect, useState } from "react";
import sanityClient from "../../client";
import { NavBar } from "../../Components/Nav-bar/NavBar";
import { Tags } from "../../Components/Tag/Tags";
import { useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../sanityFunctions";
import { component } from "../../Components/PortableTextComponent";

export const Articles: React.FC = () => {
  const [postData, updatePostData] = useState<any>(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
        title,
        slug,
        categories[]->{title},
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
    <NavBar logoSize="small">
      <div className="article-layout sm:article-layout-sm lg:article-layout-lg h-fit">
        <div className="article-content">
          <section className="article-header mb-4 w-fit">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-black font-bold mb-4">
              {postData.title}
            </h1>
            <Tags tags={postData.categories.map((tag: any) => tag.title)} />
          </section>
          <img
            src={urlFor(postData.mainImage).height(800).url()}
            alt=""
            className="rounded-md mx-auto"
          />
          <section className="article-body px-4 2xl:px-24 ">
            <PortableText value={postData.body} components={component} />
          </section>
        </div>
      </div>
    </NavBar>
  );
};
