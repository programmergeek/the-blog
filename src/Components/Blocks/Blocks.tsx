import React from "react";
import { Header } from "./Header";
import { Image } from "./Image";
import { SubHeader } from "./SubHeader";
import { Text } from "./Text";
import { block } from "./types";

/**Create content blocks depending on the type of data received
 */
export const Blocks: React.FC<{ blocks: block[] }> = ({ ...props }) => {
  return (
    <div>
      {props.blocks.map((block) => {
        switch (block.type) {
          case "sub-header":
            // if block type is sub-header, then use sub-header component. Expect data to be
            // in the first array block
            return <SubHeader content={block.content[0].content} />;

          case "normal":
            return <Text type="normal" content={block.content} />;

          case "image":
            return (
              <Image
                content={block.content[0].content}
                link={block.content[0].link ? block.content[0].link : undefined}
              />
            );
        }
        return <div></div>;
      })}
    </div>
  );
};
