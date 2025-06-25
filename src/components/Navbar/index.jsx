import styles from "./Navbar.module.css";
import emojiIcon from "../../assets/emoji-icon.svg";
import searchIcon from "../../assets/search-icon.svg";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img src={emojiIcon} className={styles.navIcon} alt="emoji-icon" />
      <img src={searchIcon} className={styles.navIcon} alt="search-icon" />
      <span className={styles.navTitle}>er</span>
    </nav>
  );
};

export default Navbar;
