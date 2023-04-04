import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CelestialLogo } from "../../assets/Logo.svg";
import "./Navigation.styles.scss";
const Navigation = () => {
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
          <Link to="/auth" className="navLink">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
