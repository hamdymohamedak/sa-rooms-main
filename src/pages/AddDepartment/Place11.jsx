import { Input, Textarea } from "@chakra-ui/react";
import React from "react";
import { Button, Tooltip } from 'antd';


import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
/* ------------------------------------------------------ */
const text = <div className=" fs-4 me-2 ">  <div>وصف مميز لعقارك</div> <div className="fs-6">
  تقع في شمال الرياض مطلة على بوليفارد الرياض
  قريبة من شارع تركي الاول , صممت بالوان مريحة , مأثثة بأثاث مودرن , يوجد شاشة 85 بوصة و اشتراك بين سبورت لمتابعة المباريات , تتميز بمساحتها الواسعة  و خصوصية تامة.</div> </div>;

const buttonWidth = 70;

const PlaceInfo = () => {
  return (
    <div className="center p-2">
      <div className="container-cus p-2">

        <div className="placeInfo_container">
          <FormControl>
            <FormLabel fontSize='1.3rem' fontWeight='900'> وصف العقار </FormLabel>
            <div className="color-gray fs-6 fw-bold "> اضف وصف مميز لعقارك وايش يتوقع الضيف ان يجد فيه </div>
            <div className="color-gray fs-6 fw-bold mt-3 mb-3 "> 73% من المضيفين المميزين الذين لديهم مبيعات و حجوزات  عالية يكتبون وصف مميز وواضح للعقار   </div>
            <Input type="text" placeholder="العنوان" focusBorderColor="brand.500" />
          </FormControl>
          <FormControl>
            <div className="d-flex justify-content-between">

              <FormLabel fontSize='1.3rem' fontWeight='900'>  اكتب وصف مميز لعقارك </FormLabel>

              <Tooltip placement="topRight" title={text}>

                <div className="color-green fs-6 fw-bold" style={{ cursor: 'pointer' }}> مثال</div>
              </Tooltip>
            </div>
            <Textarea placeholder="الوصف" rows={"10"} focusBorderColor="brand.500" />
            <div className="fs-6 fw-bold text-danger"> الوصف مطلوب... </div>
          </FormControl>

        </div>
      </div>
    </div>
  );
};

export default PlaceInfo;
