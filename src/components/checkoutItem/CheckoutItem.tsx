import {
  CheckoutItemContainer,
  ImageContainer,
  CheckoutNamePrice,
  CheckoutQuantity,
  CheckoutArrow,
  CheckoutValue,
  CheckoutRemoveButton,
} from "./CheckoutItem.styles";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/CartAction";
import { selectCartItems } from "../../store/cart/CartSelector";
import { useDispatch, useSelector } from "react-redux";

const CheckoutItem = ({ cartItem }: any) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const clearItemHandler = () => {
    dispatch(clearItemFromCart(cartItems, cartItem));
  };
  const addItemHandler = () => {
    dispatch(addItemToCart(cartItems, cartItem));
  };
  const removeItemHandler = () => {
    dispatch(removeItemFromCart(cartItems, cartItem));
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <CheckoutNamePrice>{name}</CheckoutNamePrice>
      <CheckoutQuantity>
        <CheckoutArrow onClick={removeItemHandler}>&#10094;</CheckoutArrow>
        <CheckoutValue>{quantity}</CheckoutValue>
        <CheckoutArrow onClick={addItemHandler}>&#10095;</CheckoutArrow>
      </CheckoutQuantity>
      <CheckoutNamePrice>{price}</CheckoutNamePrice>
      <CheckoutRemoveButton onClick={clearItemHandler}>
        &#10005;
      </CheckoutRemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
