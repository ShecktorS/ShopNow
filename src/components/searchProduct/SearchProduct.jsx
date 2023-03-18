import "./index.css";
import { RiListSettingsLine } from "react-icons/ri";

const SearchProduct = ({ titleText }) => {
  return (
    <div className="SearchProduct">
      <h1 className="SearchProduct__title">{titleText}</h1>
      <div className="SearchProduct__bar">
        <input
          type="text"
          name="searchFurniture"
          className="SearchProduct__input"
          placeholder=" 🔍 Search Furniture"
        />
        <button className="SearchProduct__button">
          <RiListSettingsLine />
        </button>
      </div>
    </div>
  );
};

export default SearchProduct;
