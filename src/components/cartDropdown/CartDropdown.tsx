import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./CartDropdown.styles.scss";
import Button from "../button/Button";
import CartItem from "../cartItem/CartItem";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cartDropdownContainer">
      <div className="cartItems">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button buttonType="default">Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
