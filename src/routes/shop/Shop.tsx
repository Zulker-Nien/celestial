import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductContext";
import ProductCard from "../../components/productCard/ProductCard";
import "./Shop.styles.scss";
const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="productsContainer">
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
