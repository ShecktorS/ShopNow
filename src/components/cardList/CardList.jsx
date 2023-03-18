import "./index.css";
import CardItem from "../cardItem";

const CardList = ({ titleText }) => {
  return (
    <div className="CardList">
      <h2>{titleText}</h2>
      <CardItem />
    </div>
  );
};

export default CardList;
