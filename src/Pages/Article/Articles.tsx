import React from "react";
import { Blocks } from "../../Components/Blocks/Blocks";
import { block } from "../../Components/Blocks/types";
import { NavBar } from "../../Components/Nav-bar/NavBar";
import { Tags } from "../../Components/Tag/Tags";

export const Articles: React.FC = () => {
  return (
    <NavBar>
      <div className="article h-fit">
        <div className="left-gutter"></div>
        <div className="article-content">
          <section className="article-header mb-4 w-fit">
            <h1 className="text-5xl lg:text-8xl text-black font-bold mb-4">
              Article Title
            </h1>
            <Tags tags={["CSS", "Front-end", "Web Dev"]} />
          </section>
          <img
            src="https://picsum.photos/900/800"
            alt=""
            className="rounded-md mx-auto"
          />
          <section className="article-body pt-4">
            <Blocks blocks={testData} />
          </section>
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
