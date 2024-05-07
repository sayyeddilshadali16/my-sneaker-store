import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";
import navLogo from '../Assets/sneaker-logo.jpeg'

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav_item item-name">
          <img src={navLogo} alt="logo" className="sneaker-logo" />
          <h1>mysneaker.store</h1>
        </div>
        <div className="nav_item">
          <div className="search">
            <input
              className="search_input"
              type="text"
              onChange={handleInputChange}
              value={query}
              placeholder="Search"
            />
            <i className="ri-search-line"></i>
          </div>
        </div>
        <div className="profile-container nav_item">
        <a href="favourites">
          <FiHeart className="nav-icons" />
        </a>
        <a href="cart">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="login">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
      </div>
      
    </nav>
  );
};

export default Nav;