import styles from "../styles/site.module.css";
import siteData from "../config/siteData";
import Block from "../components/block";

export default function About() {
  return siteData.pages.about.blocks.map((block) => <Block block={block} />);
}
