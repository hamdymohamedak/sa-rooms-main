import React from "react";
import "./CategoriesStyles.css";
import { Link } from "react-router-dom";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineBedroomParent } from "react-icons/md";
import { AiOutlineFire } from "react-icons/ai";
import { AiOutlineFilter } from "react-icons/ai";
/* ------------------------------------------------------ */
const Categories = ({ activeTab }) => {
  return (
    <div className="CategoriesContainer">
      <h3> عروضنا :</h3>

      <div className="tabs">
        <Link to="/departments">
          <div className={`tab ${activeTab === "flats" ? "active" : ""}`}>
            <HiOutlineBuildingOffice2 />
            <h5>شقق</h5>
          </div>
        </Link>

        <div className={`tab ${activeTab === "specialflats" ? "active" : ""}`}>
          <MdOutlineBedroomParent />
          <h5>غرف خاصه</h5>
        </div>

        <div className={`tab ${activeTab === "trends" ? "active" : ""}`}>
          <AiOutlineFire />
          <h5>الرائح</h5>
        </div>

        <div className={`tab ${activeTab === "filters" ? "active" : ""}`}>
          <AiOutlineFilter />
          <h5>فلتره</h5>
        </div>
      </div>
    </div>
  );
};

export default Categories;
