import React from "react";
import { Header } from "../../Components/Blocks/Header";
import { SubHeader } from "../../Components/Blocks/SubHeader";
import { Text } from "../../Components/Blocks/Text";
import { NavBar } from "../../Components/Nav-bar/NavBar";

export const Articles: React.FC = () => {
  return (
    <NavBar>
      <div className="article h-fit]">
        <div className="left-gutter border-2 border-black"></div>
        <div className="article-content border-2 border-black">
          <Header content="CSS Specificity" />
          <SubHeader content="Sub-Header" />
          <Text
            type="normal"
            content={[
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
            ]}
          />
        </div>
        <div className="right-gutter border-2 border-black"></div>
      </div>
    </NavBar>
  );
};
