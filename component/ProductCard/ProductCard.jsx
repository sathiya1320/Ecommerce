import "./ProductCard.css";

function ProductCard({ name, price, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>₹ {price}</p>
      <button>Buy Now</button>
    </div>
  );
}

export default ProductCard;