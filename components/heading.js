import styles from "../styles/site.module.css";

const headingMapper = (content) => ({
  h1: <h1 className={styles.title}>{content}</h1>,
  h2: <h2 className={styles.titleSecondary}>{content}</h2>,
  h3: <h3 className={styles.titleSecondary}>{content}</h3>,
});

const Heading = ({ tag, content }) => {
  return headingMapper(content)[tag];
};

export default Heading;
