import styles from "../styles/site.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        {`Copyright © ${new Date().getFullYear()} The Innovation Brothers.`}
        <br />
        All rights reserved.
      </p>
    </footer>
  );
}
