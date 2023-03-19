import "./index.css";
import { BsBagFill } from "react-icons/bs";
import { AiFillHome, AiFillHeart } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";
import { useState } from "react";

const Footer = () => {
  const [iconIsFull, setIconFull] = useState({
    home: false,
    bag: true,
    heart: false,
    not: false,
  });

  return (
    <div className="Footer">
      <AiFillHome
        className={iconIsFull.home && "selectedIcon"}
        onClick={() => {
          setIconFull({ home: true, bag: false, heart: false, not: false });
        }}
      />
      <BsBagFill className={iconIsFull.bag && "selectedIcon"} />
      <AiFillHeart className={iconIsFull.heart && "selectedIcon"} />
      <IoNotificationsSharp className={iconIsFull.not && "selectedIcon"} />
    </div>
  );
};

export default Footer;
