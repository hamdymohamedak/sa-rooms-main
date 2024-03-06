import React, { useState } from "react";
import { Input, Textarea } from "@chakra-ui/react";

/* ------------------------------------------------------ */
const PlacePrice = () => {
  const format = (val) => val + `رس`;
  const parse = (val) => val.replace(/^\$/, "");

  const [value, setValue] = useState("50");
  return (
    <div className="center p-2 mt-6">
      <div className="container-cus p-2" >

        <div className="placePrice_container">
          <div className="color-green fs-4 me-3 fw-bold" >الآن حدد السعر الخاص بك</div>
          <p className="color-gray fs-6 fw-bold">
            أكتب أسعار عقارك الاساسية بحسب أيام الأسبوع , تقدر تعدل الاسعار و تضيف عروض و خصومات لاحقا

          </p>

          <div className="d-flex justify-content-between">
            <div className="fs-5 fw-bold ">وسط الاسبوع </div>
            <div className="d-flex">
              
            <Input type="number" placeholder="0" style={{width:'70px'}} className="text-center" focusBorderColor="brand.500" />
            <div  className="color-gray fs-6 fw-bold me-2">ر.س</div>
            {/* ============== */}
            </div>
            
          </div>

          <div className="d-flex justify-content-between">
            <div className="fs-5 fw-bold "> الخميس </div>
            <div className="d-flex">
              
            <Input type="number" placeholder="0" style={{width:'70px'}} className="text-center" focusBorderColor="brand.500" />
            <div  className="color-gray fs-6 fw-bold me-2">ر.س</div>
            {/* ============== */}
            </div>
            
          </div>

          <div className="d-flex justify-content-between">
            <div className="fs-5 fw-bold ">الجمعة </div>
            <div className="d-flex">
              
            <Input type="number" placeholder="0" style={{width:'70px'}} className="text-center" focusBorderColor="brand.500" />
            <div  className="color-gray fs-6 fw-bold me-2">ر.س</div>
            {/* ============== */}
            </div>
            
          </div>

          <div className="d-flex justify-content-between">
            <div className="fs-5 fw-bold ">السبت </div>
            <div className="d-flex">
              
            <Input type="number" placeholder="0" style={{width:'70px'}} className="text-center" focusBorderColor="brand.500" />
            <div  className="color-gray fs-6 fw-bold me-2">ر.س</div>
            {/* ============== */}
            </div>
            
          </div>

          <p className="color-gray fs-6 fw-bold">
            تختلف أسعار أماكن الإقامة المماثلة لمكان الإقامة الخاص بك والتي تقع في
            منطقتك الجغرافية بشكل عام بين 50 و 70 ريال سعودي
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlacePrice;
