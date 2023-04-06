import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import {
  ProductCardContainer,
  ProductFooter,
  ProductName,
  ProductPrice,
} from "./ProductCard.styles";
import Button from "../button/Button";
const ProductCard = ({ product }: any) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ProductFooter>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </ProductFooter>
      <Button buttonType="inverted" onClick={addProductToCart}>
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
