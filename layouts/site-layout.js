import Header from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/site.module.css";

export default function SiteLayout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
