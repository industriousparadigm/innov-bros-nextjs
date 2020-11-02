import styles from "../styles/site.module.css";

const Text = ({ content }) => (
  <p
    className={styles.description}
    dangerouslySetInnerHTML={{
      __html: content,
    }}
  />
);

export default Text;
