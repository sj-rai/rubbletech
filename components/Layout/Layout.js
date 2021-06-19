import Nav from "../Nav/Nav";
import styles from "./layout.module.scss";

const Layout = (props) => (
  <div className="Layout">
    <div className={styles.nav}>
      <Nav />
    </div>
    <div className="Content">{props.children}</div>
  </div>
);
export default Layout;
