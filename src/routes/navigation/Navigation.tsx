import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CelestialLogo } from "../../assets/Logo.svg";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./Navigation.styles";
import { UserContext } from "../../contexts/UserContext";
import { signOutUser } from "../../utils/firebase/Firebase";
import CartIcon from "../../components/cartIcon/CartIcon";
import CartDropdown from "../../components/cartDropdown/CartDropdown";
import { CartContext } from "../../contexts/CartContext";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CelestialLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to="/auth">Sign In</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
