import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.Header}>
      <nav>
        <div className={styles.logo}>Dish Discovery</div>
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
