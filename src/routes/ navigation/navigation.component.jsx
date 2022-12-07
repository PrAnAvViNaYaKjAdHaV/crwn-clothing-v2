import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CwronLog } from "../../assets/Crown.svg";
function Navigation() {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CwronLog />
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
}

export default Navigation;
