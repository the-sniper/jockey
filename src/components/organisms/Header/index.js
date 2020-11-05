import React from "react";
import { Link } from "react-router-dom";
import HeaderMenu from "../../molecules/HeaderMenu";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTop">
        <div className="customContainer d-flex justify-content-end">
          <Link to="/">Investor Relationship</Link>
          <Link to="/">Help</Link>
        </div>
      </div>
      <div className="headerMain customContainer">
        <div className="row flex-nowrap justify-content-end">
          <Link className="brandLogo" to="/"></Link>
          <div className="hmLink float-right">
            <Link className="linkStoreLocator" to="/">
              Store Locator
            </Link>
            <Link className="linkHeaderLogin " to="/">
              Login
            </Link>
          </div>
          <div className="headerSearchBlock">
            <input className="searchInputNew" type="text" value="Search" />
            <Link to="" className="headerSearchBtnLink" title="Search">
              <span class="material-icons">search</span>
            </Link>
          </div>
        </div>
        <HeaderMenu/>
      </div>
    </div>
  );
}

export default Header;
