import React from "react";
import { Link } from "react-router-dom";
import "./HeaderMenu.css";

function HeaderMenu() {
  return (
    <div class="headerMenu">
      <a class="menuClose"></a>
      <nav class="navbar navbar-expand-sm justify-content-center">
        <ul class="navbar-nav ng-tns-c2-0 ng-star-inserted">
          <li class="nav-item ng-tns-c2-0 ng-star-inserted">
            <Link className="nav-link" to="/">
              Men
            </Link>
          </li>
          <li className="nav-item ng-tns-c2-0 ng-star-inserted">
            <Link className="nav-link" to="/">
              Women
            </Link>
          </li>
          <li className="nav-item ng-tns-c2-0 ng-star-inserted">
            <Link className="nav-link" to="/">
              Juniors
            </Link>
          </li>
          <li className="nav-item ng-tns-c2-0 ng-star-inserted">
            <Link className="nav-link" to="/">
              ACCESSORIES
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HeaderMenu;
