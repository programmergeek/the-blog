import { BlockQuote } from "./Blocks/BlockQuote";
import { Header } from "./Blocks/Header";
import { SubHeader } from "./Blocks/SubHeader";
import { Image } from "./Blocks/Image";
import { Table } from "./Blocks/Table";
import { PortableTextReactComponents } from "@portabletext/react";

export const component: Partial<PortableTextReactComponents> = {
  block: {
    h2: ({ value }: any) => <Header> {value.children[0].text} </Header>,

    h3: ({ value }: any) => <SubHeader>{value.children[0].text}</SubHeader>,

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

  marks: {
    link: ({ value, children }) => (
      <a
        className="link link-primary"
        href={value.href}
        target="_blank"
        rel="noreferrer noopener"
      >
        {children}
      </a>
    ),
  },
};
