import React from "react";
import { Link } from "react-router-dom";
import "./FilterMenu.css";

function FilterMenu() {
  return (
      <div className="filtersPanel d-flex">
        <div className="fpAcc d-flex justify-content-end align-items-center">
          <h4>Fit Type</h4>
          <span className="material-icons">expand_more</span>
        </div>
        <div className="fpAcc d-flex justify-content-end align-items-center">
          <h4>Size</h4>
          <span className="material-icons">expand_more</span>
        </div>
        <div className="fpAcc d-flex justify-content-end align-items-center">
          <h4>Style</h4>
          <span className="material-icons">expand_more</span>
        </div>
        <div className="fpAcc d-flex justify-content-end align-items-center">
          <h4>Color</h4>
          <span className="material-icons">expand_more</span>
        </div>
        <div className="fpAcc d-flex justify-content-end align-items-center">
          <h4>Fabric</h4>
          <span className="material-icons">expand_more</span>
        </div>
        <div className="fpAcc d-flex justify-content-end align-items-center">
          <h4>Sleeve</h4>
          <span className="material-icons">expand_more</span>
        </div>
      </div>
  );
}

export default FilterMenu;
