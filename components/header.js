import Link from "next/link";
import siteData from "../config/siteData";
import styles from "../styles/site.module.css";

const Header = () => (
  <header className={styles.header}>
    <ul className={styles.menu}>
      {siteData.menuItems.map((item) => (
        <li className={styles.menuItem}>
          <Link href={item.href}>{item.title}</Link>
        </li>
      ))}
    </ul>
  </header>
);

export default Header;
