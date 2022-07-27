import { BlockQuote } from "./Blocks/BlockQuote";
import { Header } from "./Blocks/Header";
import { SubHeader } from "./Blocks/SubHeader";
import { Text } from "./Blocks/Text";
import { Image } from "./Blocks/Image";
import { Table } from "./Blocks/Table";

export const component = {
  block: {
    h2: ({ value }: any) => <Header> {value.children[0].text} </Header>,

    h3: ({ value }: any) => <SubHeader>{value.children[0].text}</SubHeader>,

    normal: ({ value }: any) => <Text value={value} />,

    blockquote: ({ value }: any) => <BlockQuote value={value} />,
  },
  types: {
    image: ({ value }: any) => <Image value={value} />,
    table: ({ value }: any) => <Table data={value} />,
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className="list-item list-disc ml-7"> {children} </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-item list-decimal"> {children} </ol>
    ),
  },
};
