import { Input } from "@chakra-ui/react";
import React, { useState } from "react";
import Cook from "../../assest/img/cook.png"
import Bath from "../../assest/img/bath.png"
import Bed from "../../assest/img/bed.png"
import Pool from "../../assest/img/pool.png"
function Ditails() {

    const [activeType, setActiveType] = useState();
    return (
        <div className="center">
            <div className="container-cus mt-6 p-3">
                <div className="me-3 color-green fs-4 fw-bold mb-3">تفاصيل العقار</div>
                <div className="fs-5 color-gray fw-bold mb-3"> مساحة عقارك</div>
                <div className="d-flex mb-3">
                    <Input focusBorderColor="brand.500" size="lg"  maxLength={"2"} type={"number"} className="text-center" style={{ width: '100px', fontSize: '28px', border: 'solid 1px ' }} />
                    <div className="fs-5 color-gray me-3 fw-bold "> متر مربع</div>
                </div>
                <hr />
                {/* ================================ */}
                <div className="me-3 color-green fs-4 fw-bold mb-3">مرافق عقارك الرئيسية</div>
                <div className="fs-6 color-gray fw-bold mb-3">اختر كل المرافق الموجودة ف عقارك</div>
                {/* =================== */}
                <div className="catigorys_container">

                    <div
                        className={`catigory kitchen ${activeType === "kitchen" ? "active" : ""
                            }`}
                        onClick={() => setActiveType("kitchen")}
                    >
                        <img src={Cook} alt="" />
                        <h3> مطبخ</h3>
                    </div>
                    {/* ========================= */}
                    <div
                        className={`catigory bath_room ${activeType === "bath_room" ? "active" : ""
                            }`}
                        onClick={() => setActiveType("bath_room")}
                    >
                        <img src={Bath} alt="" />
                        <h3> دورة مياة</h3>
                    </div>
                    {/* ========================= */}

                    <div
                        className={`catigory pool  ${activeType === "pool" ? "active" : ""
                            }`}
                        onClick={() => setActiveType("pool")}
                    >
                        <img  src={Pool} alt="" />
                        <h3> مسبح</h3>
                    </div>
                    {/* ========================= */}
                    <div
                        className={`catigory bed_room ${activeType === "bed_room" ? "active" : ""
                            }`}
                        onClick={() => setActiveType("bed_room")}
                    >
                        <img src={Bed} alt="" />
                        <h3> غرفة نوم </h3>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Ditails