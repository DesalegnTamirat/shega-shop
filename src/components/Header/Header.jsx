import { SlLocationPin } from "react-icons/sl";
import logo from "../../assets/images/logo.png";
import englishLogo from "../../assets/images/USA-EN-LOGO.svg";
import { FaSearch } from "react-icons/fa";

function Header() {
  return (
    <header>
      <div>
        <div>
          <a href="#">
            <img src={logo} alt="amazon logo" />
          </a>
          <span>
            <SlLocationPin />
          </span>
          <div>
            <p>Delivered to</p>
            <span>Ethiopia</span>
          </div>
        </div>
        <div>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="search product" />
          <FaSearch />
        </div>
        <div>
          <div>
            <img src={englishLogo} alt="USA" />
            <select>
              <option value="">EN</option>
            </select>
          </div>
          <a href="">
            <div>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
          </a>
          <a href="">
            <p>Returns</p>
            <span>& Orders</span>
          </a>
          <a href="">
            <span>0</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
