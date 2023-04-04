import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CelestialLogo } from "../../assets/Logo.svg";
import "./Navigation.styles.scss";
import { UserContext } from "../../contexts/UserContext";
import { signOutUser } from "../../utils/firebase/Firebase";
import CartIcon from "../../components/cartIcon/CartIcon";
import CartDropdown from "../../components/cartDropdown/CartDropdown";
import { CartContext } from "../../contexts/CartContext";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logoContainer">
          <CelestialLogo />
        </Link>
        <div className="navLinksContainer">
          <Link to="/shop" className="navLink">
            Shop
          </Link>
          {currentUser ? (
            <span className="navLink" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link to="/auth" className="navLink">
              Sign In
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
