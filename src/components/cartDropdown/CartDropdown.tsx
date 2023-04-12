import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/CartSelector";
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./CartDropdown.styles";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import CartItem from "../cartItem/CartItem";
const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems && cartItems.length ? (
          cartItems.map((item: any) => (
            <CartItem key={item.id} cartItem={item} />
          ))
        ) : (
          <EmptyMessage as="span">Your cart is empty.</EmptyMessage>
        )}
      </CartItems>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.default}
        onClick={goToCheckoutHandler}
      >
        Go to checkout
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
