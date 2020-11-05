import React from "react";
import "./ProductListing.css";
import BreadCrumbs from "../../components/molecules/BreadCrumbs";
import FilterMenu from "../../components/molecules/FilterMenu";
import ProductCard from "../../components/molecules/ProductCard";

function ProductListing() {
  return (
    <div className="productListing">
      <div className="container">
        <BreadCrumbs />
        <div className="row">
          <div className="col-12">
            <div class="productTitleInnerDiv ng-star-inserted">
              <h1>
                <span class="ng-star-inserted">T-Shirts for Men</span>
              </h1>
              <small>(180 Items)</small>
            </div>
          </div>
        </div>
        <FilterMenu/>
        <div className="row mt-4">
            <div className="col-3">
                <ProductCard/>
            </div>
            <div className="col-3">
                <ProductCard/>
            </div>
            <div className="col-3">
                <ProductCard/>
            </div>
            <div className="col-3">
                <ProductCard/>
            </div>
            <div className="col-3">
                <ProductCard/>
            </div>
            <div className="col-3">
                <ProductCard/>
            </div>
            <div className="col-3">
                <ProductCard/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
