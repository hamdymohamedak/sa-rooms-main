import React from "react";
import "./FooterStyles.css";
import { GrLanguage } from "react-icons/gr";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Button } from "@chakra-ui/react";
/* ------------------------------------------------------ */
const Footer = () => {
  return (
    <div className="footer_container">
      {/* top footer  */}
      <div className="top_footer">
        {/* right  */}
        <div className="right_container">
          <img src="/images/bigLogo.png" alt="" />
          <div>
            <p>خدمه العملاء</p>
            <p>5468087352 </p>
            <p>من 9 صباحاً إلى 10 ليلاً</p>
          </div>
        </div>

        <ul className="middle_container">
          <li>
            <a href="#">شاليهات</a>
          </li>
          <li>
            <a href="#">شقق و بيوت خاصة</a>
          </li>
          <li>
            <a href="#">مزارع </a>
          </li>
          <li>
            <a href="#"> مخيمات </a>
          </li>
          <li>
            <a href="#">العروض</a>
          </li>
        </ul>

        {/* left */}
        <ul className="left_container">
          <li>
            <a href="#">شروط الاستخدام</a>
          </li>
          <li>
            <a href="#">الاسئلة المتكررة</a>
          </li>
          <li>
            <a href="#"> الشروط </a>
          </li>
          <li>
            <a href="#"> تواصل معنا </a>
          </li>
        </ul>
      </div>

      {/* bottom footer  */}
      <div className="bottom_footer">
        <div className="buttons">
          <Button
            variant="outline"
            borderRadius="1000px"
            height="46.8px"
            px="1.685rem"
            fontWeight="bold"
            fontSize="1.3rem"
          >
            اضف عقارك
          </Button>

          <Button
            variant="solid"
            borderRadius="1000px"
            height="46.8px"
            px="1.685rem"
            fontWeight="bold"
            fontSize="1.3rem"
            leftIcon={<IoPersonCircleOutline fill="white" />}
          >
            تسجيل الدخول
          </Button>
        </div>
        <div className="links">
          <a href="#">
            <BsFacebook size="2.6em" />
          </a>
          <a href="#">
            <AiFillTwitterCircle size="3.2em" />
          </a>
          <a href="#">
            <AiFillInstagram size="3.2em" />
          </a>
          <a href="#">
            <AiFillYoutube size="3em" />
          </a>
        </div>

        <div className="languages">
          <GrLanguage size="2em" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
