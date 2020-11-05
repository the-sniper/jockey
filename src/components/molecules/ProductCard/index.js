import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard() {
  return (
    <div className="col-12 productItemBlock">
      <Link className="productCard productItemBlockInner">
        <div class="productItemDivBlock">
          <img
            alt="Jockey Product Image"
            class="productBlankImg"
            src="/assets/images/img-newarrival-blank.png"
          />
          <div class="popularProDiv">
            <img
              src="https://Static05.Jockey.in/uploads/dealimages/7137/listimages/deep-atlantis-sport-t-shirt-2714-5.jpg"
              alt="Deep Atlantis Sport T-Shirt"
              class="ng-star-inserted"
            />
            <div class="availableSizesList ng-star-inserted">
              <small>Size:</small>
              <span class="ng-star-inserted">S</span>
              <span class="ng-star-inserted">M</span>
              <span class="ng-star-inserted">L</span>
              <span class="ng-star-inserted">XL</span>
              <span class="ng-star-inserted">XXL</span>
            </div>
          </div>
          <div class="clearfix"></div>
          <div class="col-12 productItemInfo">
            <span class="spnProrice spnStyleNum">Style #2714</span>
            <div class="clearfix"></div>
            <h4>Deep Atlantis Sport T-Shirt</h4>
            <div class="divPriceStyle">
              <span class="spnProrice"> ₹ 489.00</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
