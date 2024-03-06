import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { Divider, IconButton, Input } from "@chakra-ui/react";

function Flatdetails() {
    const [mainCouncil, setMainCouncil] = useState(3);
    const [additionalCouncil, setAdditionalCouncil] = useState(4);
    const [externalSession, setExternalSession] = useState(1);
    const [mainAnnex, setMainAnnex] = useState(1);

    const increment = (setter) => {
        setter((prevValue) => prevValue + 1);
    };

    const decrement = (setter) => {
        setter((prevValue) => prevValue - 1);
    };

    return (
        <div className="center">
            <div className="container-cus mt-6 p-3">
                <div className="me-3 color-green fs-4 fw-bold mb-3">تفاصيل المجالس </div>
                <div className="type_container d-flex justify-content-between">
                    <div className="right_container">
                        <h4 className="fs-5 text-center fw-bold">مجلس رئيسي </h4>
                    </div>

                    <div className="left_container">
                        <IconButton size="sm" rounded="full" variant="outline" colorScheme="brand" aria-label="Decrement" isDisabled={mainCouncil <= 0} onClick={() => decrement(setMainCouncil)} icon={<FiMinus />} />
                        <div className="number">{mainCouncil}</div>
                        <IconButton size="sm" rounded="full" variant="outline" colorScheme="brand" aria-label="Increment" onClick={() => increment(setMainCouncil)} icon={<BsPlus />} />
                    </div>
                </div>

                {/* Additional council */}
                <div className="type_container d-flex justify-content-between mb-5 mt-5">
                    <div className="right_container">
                        <h4 className="fs-5 text-center fw-bold">مجلس اضافي </h4>
                    </div>

                    <div className="left_container">
                        <IconButton size="sm" rounded="full" variant="outline" colorScheme="brand" aria-label="Decrement" isDisabled={additionalCouncil <= 0} onClick={() => decrement(setAdditionalCouncil)} icon={<FiMinus />} />
                        <div className="number">{additionalCouncil}</div>
                        <IconButton size="sm" rounded="full" variant="outline" colorScheme="brand" aria-label="Increment" onClick={() => increment(setAdditionalCouncil)} icon={<BsPlus />} />
                    </div>
                </div>

                {/* External session */}
                <div className="type_container d-flex justify-content-between mb-5">
                    <div className="right_container">
                        <h4 className="fs-5 text-center fw-bold">جلسة خارجية </h4>
                    </div>

                    <div className="left_container">
                        <IconButton size="sm" rounded="full" variant="outline" colorScheme="brand" aria-label="Decrement" isDisabled={externalSession <= 0} onClick={() => decrement(setExternalSession)} icon={<FiMinus />} />
                        <div className="number">{externalSession}</div>
                        <IconButton size="sm" rounded="full" variant="outline" colorScheme="brand" aria-label="Increment" onClick={() => increment(setExternalSession)} icon={<BsPlus />} />
                    </div>
                </div>

                {/* Main annex */}
                <div className="type_container d-flex justify-content-between">
                    <div className="right_container">
                        <h4 className="fs-5 text-center fw-bold">ملحق رئيسي </h4>
                    </div>

                    <div className="left_container">
                        <IconButton size="sm" rounded="full" variant="outline" colorScheme="brand" aria-label="Decrement" isDisabled={mainAnnex <= 0} onClick={() => decrement(setMainAnnex)} icon={<FiMinus />} />
                        <div className="number">{mainAnnex}</div>
                        <IconButton size="sm" rounded="full" variant="outline" colorScheme="brand" aria-label="Increment" onClick={() => increment(setMainAnnex)} icon={<BsPlus />} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Flatdetails;
