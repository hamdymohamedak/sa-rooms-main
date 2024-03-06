import { Input } from "@chakra-ui/react";
import React from "react";
import Map from "../../assest/img/Annotation 2023-03-25 131027.png"
const PlaceLocation = () => {
  return (
    <div className="center mt-6 ">

  <div className="container-form p-3">

    <div className="placeLocation_container">
      <h3 className="color-green">عنوان العقار </h3>
      <p className="color-gray fs-5 fw-bold">الموقع علي الخريطة </p>
      <Input focusBorderColor="brand.500" placeholder="ادخل عنوانك" size="lg" />
      <img style={{borderRadius:'5px',userSelect:'none'}} src={Map} alt="" />
    </div>
  </div>
    </div>
  );
};

export default PlaceLocation;
