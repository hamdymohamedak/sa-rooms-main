import React, { useState } from "react";

/* ------------------------------------------------------ */
const PlaceType = () => {
  const [activeType, setActiveType] = useState("private_room");
  return (
    <div className="center p-1">

      <div className=" container-cus p-2 mt-6">

        <div className="fs-2 color-green fw-bold me-3"> معلومات العقار  </div>
        <div className="fs-4 text-dark fw-bold me-3 mt-4"> اسم العقار  </div>
        <input type="text" placeholder="ادخل اسم عقارك الذي سيظهر للضيوف" className="input mt-4 mb-4" />
        <hr />
        {/* ================================================= */}
        <div className="fs-4 text-dark fw-bold me-3 mt-4" >نوع العقار</div>
        <div className="color-gray fs-6 fw-bold mb-2">حدد التصنيف المناسب لعقارك </div>
        <div className="container">
          <div className="row center">
              <div className="placeType_container">
            <div className="col-6">
                {/* ================================================= */}
                <div
                  className={`place private_room ${activeType === "private_room" ? "active" : ""
                    }`}
                  onClick={() => setActiveType("private_room")}
                >
                  <img src="/images/flats/bedroom 1.png" alt="" />
                  <h3> غرفه خاصه</h3>
                </div>

              </div>
              {/* ================================================= */}

              <div className="col-6">

                <div
                  className={`place apartment ${activeType === "apartment" ? "active" : ""
                    }`}
                  onClick={() => setActiveType("apartment")}
                >
                  <img src="/images/flats/apartment 1.png" alt="" />

                  <h3>شقه</h3>
                </div>

              </div>
              {/* ================================================= */}
            </div>
          </div>
        </div>
      </div>

    </div>

  );
}


export default PlaceType;
