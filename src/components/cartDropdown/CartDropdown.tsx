import "./CartDropdown.styles.scss";
import Button from "../button/Button";
const CartDropdown = () => {
  return (
    <div className="cartDropdownContainer">
      <div className="cartItems"></div>
      <Button buttonType="default">Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
