import { CartIconContainer, ShoppingIcon, ItemCount } from "./CartIcon.styles";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/CartSelector";
import { setIsCartOpen } from "../../store/cart/CartAction";
import { useSelector, useDispatch } from "react-redux";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount as="span">{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
