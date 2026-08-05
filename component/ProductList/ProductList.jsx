import "./ProductList.css";
import ProductCard from "../ProductCard/ProductCard";

import laptop from "../../assets/laptop.png";
import phone from "../../assets/phone.png";
import headphone from "../../assets/headphone.png";
import watch from "../../assets/watch.png";
const products = [
  {
    name: "Laptop",
    price: 50000,
    image: laptop,
  },
  {
    name: "Phone",
    price: 20000,
    image: phone,
  },
  {
    name: "Headphone",
    price: 2500,
    image: headphone,
  },
  {
    name: "Watch",
    price: 3500,
    image: watch,
  },
];

function ProductList() {
  return (
    <div className="products">
      {products.map((item, index) => (
        <ProductCard
          key={index}
          name={item.name}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default ProductList;