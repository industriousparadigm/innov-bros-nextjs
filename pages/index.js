import Block from "../components/block";
import siteData from "../config/siteData";
import styles from "../styles/site.module.css";

export default function Home() {
  return siteData.pages.home.blocks.map((block) => <Block block={block} />);
}
