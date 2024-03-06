import React from "react";
import "./CardStyles.css";
import { AiOutlineHeart } from "react-icons/ai";
import { BsTextarea } from "react-icons/bs";
import { BiBath } from "react-icons/bi";
import { MdOutlineBed } from "react-icons/md";
import { Link } from "react-router-dom";
/* ------------------------------------------------------ */

const Card = ({ flat, isCategoryCard }) => {
  const { id, image, rating, reviews, title, location, date, price } = flat;

  return (
    <Link to={`/departments/${id}`}>
      <div className="card_container">
        <img src={image} alt="flat image" className="flat_image" />

        <div className="card_content">
          {isCategoryCard && (
            <h4 className="price_one_night">72ر.س لليلة الواحدة</h4>
          )}

          <h4> {title}</h4>

          <p className="location">
            <img src="./images/location.png" alt="" />
            {location}
          </p>

          <p className="date">{date}</p>

          {!isCategoryCard && <p className="price">{price}</p>}

          {isCategoryCard && (
            <ul className="properties">
              <li>
                <BsTextarea />
                <span> 80 متر مربع</span>
              </li>
              <li>
                <BiBath />
                <span>2 حمام</span>
              </li>
              <li>
                <MdOutlineBed />

                <span>2 سراير</span>
              </li>
            </ul>
          )}
        </div>

        {isCategoryCard ? (
          <div className="wishlist_icon">
            <AiOutlineHeart size="3em" />
          </div>
        ) : (
          <div className="reviews_badge">
            ({reviews}) {rating}
            <img src="./images/star.png" alt="" className="starIcon" />
          </div>
        )}
      </div>
    </Link>
  );
};

export default Card;
