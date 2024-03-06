import React from "react";
import Card from "../../components/card/Card";
import Categories from "../../components/Categories/Categories";
import Filters from "../../components/Filters/Filters";
import { departments } from "../../Data/departments";
import Footer from "../../components/Footer/Footer";
/* ------------------------------------------------------ */

const Departments = () => {
  return (
    <>
    <div className="departments_container">
      {/* Cateogries */}
      <Categories activeTab="flats" />

      {/* Filters */}
      <Filters />

      {/* cards */}
      <div className="cards_container">
        {departments.map((flat) => (
          <Card flat={flat} key={flat.id} isCategoryCard={true} />
          ))}
      </div>
    </div>
    <div className="divider" style={{ marginTop: "8rem" }}></div>
          <div className="container">
            <Footer />
          </div>  
          </>
  );
};

export default Departments;
