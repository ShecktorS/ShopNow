import "./index.css";
import CardItem from "../cardItem";
import { products } from "../../mock/products";

const CardList = ({ titleText }) => {
  return (
    <div className="CardList">
      <h2>{titleText}</h2>
      <div className="CardList__content">
        {products.map((item) => (
          <CardItem item={item} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
