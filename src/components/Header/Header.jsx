import styles from "./Header.module.css";
import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <div className={styles.Header}>
      <nav>
        <div className={styles.brand}>
          <img src={logo} alt="Dish Discovery logo"></img>
          <span>Dish Discovery</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#">Home</a>
          <a href="#">Discover</a>
          <a href="#">Cookbook</a>
          <a href="#">Profile</a>
        </div>
      </nav>
    </div>
  );
}
export default Header;
