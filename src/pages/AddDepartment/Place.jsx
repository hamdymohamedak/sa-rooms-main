import React, { useState } from "react";
import { utilities } from "../../Data/utilities";
/* ------------------------------------------------------ */
const PlaceFeatures = () => {
  const titles = utilities.map((item) => {
    const AllTitles = [];
    item.options.forEach((option) => AllTitles.push(option.title));
    return AllTitles;
  });

  let titlesObj = {};
  titles.forEach((arr, index) => {
    arr.forEach((title) => (titlesObj[title] = false));
  });

  const [features, setFeatuers] = useState(titlesObj);

  return (
    <div className="center p-2">
      <div className="container-form mt-6 p-3">

    <div className="PlaceFeatures_container">
      <h3 className="color-green fw-bold">مشاركة بعض المرافق المتوفرة</h3>
      <p>لا تتردد في اخبار الضيف عن المرافق المتوفرة في سكنك</p>

      <div className="categories">
        {utilities.map((item, index) => {
          return (
            <div className="category" key={index}>
              <div className="category_title">{item.title}</div>
              <div className="category_options">
                {item.options.map((option, index) => (
                  <div
                    className={`category_option ${
                      features[option.title] && "active"
                    }`}
                    key={index}
                    onClick={() => {
                      setFeatuers((prev) => ({
                        ...prev,
                        [option.title]: !prev[option.title],
                      }));
                    }}
                  >
                    <img src={option.image} alt="" />
                    <h6>{option.title}</h6>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
                </div>
          </div>
  );
};

export default PlaceFeatures;
