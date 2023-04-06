import { useContext } from "react";
import {
  CheckoutItemContainer,
  ImageContainer,
  CheckoutNamePrice,
  CheckoutQuantity,
  CheckoutArrow,
  CheckoutValue,
  CheckoutRemoveButton,
} from "./CheckoutItem.styles";
import { CartContext } from "../../contexts/CartContext";

const CheckoutItem = ({ cartItem }: any) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);
  const clearItemHandler = () => {
    clearItemFromCart(cartItem);
  };
  const addItemHandler = () => {
    addItemToCart(cartItem);
  };
  const removeItemHandler = () => {
    removeItemToCart(cartItem);
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
