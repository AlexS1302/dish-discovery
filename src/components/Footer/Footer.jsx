import styles from "./Footer.module.css";
import {
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandPinterest,
  IconBrandTwitter,
} from "@tabler/icons-react";

function Footer() {
  return (
    <div className={styles.Footer}>
      <section className={styles.social}>
        <div className={styles.logo}>Dish Discovery</div>
        <div className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
          repellendus? Vel ipsa saepe veritatis ducimus quasi earum, voluptatem
          atque voluptates, autem ab aliquam iure harum quaerat, ipsum
          repudiandae. Omnis, amet.
        </div>
        <div className={styles.icons}>
          <IconBrandInstagram />
          <IconBrandYoutube />
          <IconBrandPinterest />
          <IconBrandTwitter />
        </div>
      </section>
      <section className={styles.explore}>
        <h3>Explore</h3>
        <ul>
          <li>About</li>
          <li>Blog</li>
          <li>Changelog</li>
        </ul>
      </section>
      <section className={styles.support}>
        <h3>Support</h3>
        <ul>
          <li>Contact Us</li>
          <li>Accessibility</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </section>
    </div>
  );
}
export default Footer;
