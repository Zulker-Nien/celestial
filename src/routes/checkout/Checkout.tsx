import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import "./Checkout.styles.scss";
import CheckoutItem from "../../components/checkoutItem/CheckoutItem";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="checkoutContainer">
      <div className="checkoutHeader">
        <div className="headerBlock">
          <span>Product</span>
        </div>
        <div className="headerBlock">
          <span>Description</span>
        </div>
        <div className="headerBlock">
          <span>Quantity</span>
        </div>
        <div className="headerBlock">
          <span>Price</span>
        </div>
        <div className="headerBlock">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem: any) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
