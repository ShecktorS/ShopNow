import "./index.css";
import { HiOutlineSquares2X2 } from "react-icons/hi2";

const Header = () => {
  return (
    <div className="Header">
      <HiOutlineSquares2X2 className="Header__menu" />
      <img src="https://robohash.org/filippo" alt="pic profile" />
    </div>
  );
};

export default Header;
