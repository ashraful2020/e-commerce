 
import "./product.css";
const Product = ({ id, title, price, img, rating }) => {
  const dispatch = null;
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: { id: id, title, price, img, rating },
    });
  };
  return (
    <div className="product-container">
      <img src={img} alt="" srcSet="" />
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>

      <button onClick={addToBasket}>Add to cart</button>
    </div>
  );
};

export default Product;
