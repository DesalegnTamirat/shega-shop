import { SlLocationPin } from "react-icons/sl";
import logo from "../../assets/images/logo.png";
import englishLogo from "../../assets/images/USA-EN-LOGO.svg";
import styles from "./header.module.css";
import { BiCart, BiSearch } from "react-icons/bi";
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <header>
      <div className={styles.header__container}>
        <div className={styles.logo__container}>
          <a href="#">
            <img src={logo} alt="amazon logo" />
          </a>
          <div className={styles.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>
        <div className={styles.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="search product" />
          <BiSearch size={25} />
        </div>
        <div className={styles.order__container}>
          <a className={styles.language}>
            <img src={englishLogo} alt="USA" />
            <select>
              <option value="">EN</option>
            </select>
          </a>
          <a>
            <div>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
          </a>
          <a>
            <p>Returns</p>
            <span>& Orders</span>
          </a>
          <a className={styles.cart}>
            <BiCart size={35} />
            <span>0</span>
          </a>
        </div>
      </div>
      <LowerHeader />
    </header>
  );
}

export default Header;
