import {
  ProductCardContainer,
  ProductFooter,
  ProductName,
  ProductPrice,
} from "./ProductCard.styles";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/cart/CartAction";
import { selectCartItems } from "../../store/cart/CartSelector";
import Button from "../button/Button";
const ProductCard = ({ product }: any) => {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

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
