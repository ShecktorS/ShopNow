import "./index.css";

const CardItem = () => {
  return (
    <div className="CardItem">
      <div className="CardItem__image">
        <img src={products.thumbnail} alt={products.title} />
        <div
          className="likeButton"
          onClick={() =>
            alert("Hai aggiunto il prodotto alla lista dei preferiti! 😍")
          }
        >
          ❤️
        </div>
      </div>
      <div className="CardItem__info">
        <h3 className="CardItem__info--title">{products.title}</h3>
        <div className="CardItem_info--downSection">
          <p className="CardItem_info--price">€ {products.price},00</p>
          <p className="CardItem_info--rating">
            ⭐ {products.rating.toFixed(1)}
          </p>
          <div className="addToCart">+</div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;

const products = {
  id: 1,
  title: "iPhone 9",
  description: "An apple mobile which is nothing like apple",
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: "Apple",
  category: "smartphones",
  thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  images: [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  ],
};
