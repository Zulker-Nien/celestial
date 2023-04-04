import "./CartIcon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/ShoppingBag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cartIconContainer" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shoppingIcon" />
      <span className="itemCount">0</span>
    </div>
  );
};

export default CartIcon;
