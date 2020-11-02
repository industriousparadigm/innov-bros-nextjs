import Heading from "./heading";
import Paragraph from "./paragraph";
// import Picture from "./picture";

const Block = ({ block }) => {
  const { tag, content } = block;

  switch (block.type) {
    case "heading":
      return <Heading tag={tag} content={content} />;
    case "paragraph":
      return <Paragraph content={content} />;
    default:
      return null;
  }
};

export default Block;
