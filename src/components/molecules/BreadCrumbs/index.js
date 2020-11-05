import React from "react";
import "./BreadCrumbs.css";

function BreadCrumbs() {
  return (
    <div>
      <div class="col-12 bredcrumbsBlock">
        <ul class="col-12 bredcrumbs">
          <li>
            <a
              routerlinkactive="router-link-active"
              href="/"
              class="router-link-active"
            >
              Home
            </a>
          </li>
          <li class="ng-star-inserted">
            <a href="/men/products" routerlinkactive="router-link-active">
              Men
            </a>
          </li>
          <li class="ng-star-inserted">
            <a
              routerlinkactive="router-link-active"
              href="/men/apparel-tops"
              class="router-link-active"
            >
              Apparel Tops
            </a>
          </li>
          <li class="active ng-star-inserted">T-Shirts</li>
        </ul>
      </div>
    </div>
  );
}

export default BreadCrumbs;
