import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/cuva-logo.png";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div className="logo">
            <img src={logo} alt="cuva-logo" height="80" width="80" />
          </div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
