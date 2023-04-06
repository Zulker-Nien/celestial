import { CartIconContainer, ShoppingIcon, ItemCount } from "./CartIcon.styles";
// import { ReactComponent as ShoppingIcon } from "../../assets/ShoppingBag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount as="span">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
