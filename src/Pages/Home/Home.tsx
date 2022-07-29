import React, { useEffect, useState } from "react";
import { Card } from "../../Components/Card/Card";
import { MasonryGrid } from "../../Components/MasonryGrid/MasonryGrid";
import { NavBar } from "../../Components/Nav-bar/NavBar";
import sanityClient from "../../client";
import { urlFor } from "../../sanityFunctions";

const cardData = {
  href: "/",
  snippet:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt maximus pretium. Morbi lacinia turpis vitae urna mollis mattis. Sed in eros luctus, eleifend sem id, tincidunt orci. Ut nec.",
  title: "CSS Specificity",
};

export const Home = () => {
  const [posts, updatePosts] = useState<any>(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "post"]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      categories[]->{title},
      snippet
    }
    `
      )
      .then((data) => updatePosts(data))
      .catch(console.log);
  }, []);

  useEffect(() => console.log(posts), [posts]);

  if (!posts) return <div>Loading...</div>;

  return (
    <NavBar>
      <div className="App main">
        <div className="left-gutter w-1/5"></div>
        <div className="masonry-grid">
          <MasonryGrid>
            {posts.map((post: any, _key: number) => (
              <Card
                href={`/${post.slug.current}`}
                snippet={post.snippet[0].children.map((text: any) => text.text)}
                title={post.title}
                tags={post.categories.map((tag: any) => tag.title)}
                image={urlFor(post.mainImage).url()}
                key={_key}
              />
            ))}
          </MasonryGrid>
        </div>
        <div className="right-gutter w-1/5"></div>
      </div>
    </NavBar>
  );
};
