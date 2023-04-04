import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";
import "./CartDropdown.styles.scss";
import Button from "../button/Button";
import CartItem from "../cartItem/CartItem";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cartDropdownContainer">
      <div className="cartItems">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button buttonType="default" onClick={goToCheckoutHandler}>
        Go to checkout
      </Button>
    </div>
  );
};

export default CartDropdown;
