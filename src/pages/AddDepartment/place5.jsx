import { BsPlus } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { Divider, IconButton, Input } from "@chakra-ui/react";
import { useState } from "react";

function Roomdetails() {
    let [roomsCounter, setRoomsCounters] = useState(1);
    let [familyCounter, setFamilyCounter] = useState(3);
    let [masterCounter, setMasterCounter] = useState(3);

    let handleIncrementRoomsNumber = () => setRoomsCounters(roomsCounter + 1);
    let handleDecrementRoomsNumber = () => {
        if (roomsCounter > 1) {
            setRoomsCounters(roomsCounter - 1);
        }
    };

    let handleFamilyCountIncrement = () => setFamilyCounter(familyCounter + 1);
    let handleFamilyCountDecrement = () => {
        if (familyCounter > 1) {
            setFamilyCounter(familyCounter - 1);
        }
    };

    let handleMasterCountIncrement = () => setMasterCounter(masterCounter + 1);
    let handleMasterCountDecrement = () => {
        if (masterCounter > 1) {
            setMasterCounter(masterCounter - 1);
        }
    };

    return (
        <div className="center">
            <div className="container-cus mt-6 p-3">
                <div className="me-3 color-green fs-4 fw-bold mb-3">تفاصيل غرفة النوم </div>
                <div className="type_container d-flex justify-content-between">
                    <div className="right_container">
                        <h4 className="fs-5 text-center fw-bold">عدد غرف النوم </h4>
                    </div>

                    <div className="left_container">
                        {roomsCounter > 1 && (
                            <IconButton onClick={handleDecrementRoomsNumber} size="sm" rounded="full" variant="outline" colorScheme="brand" aria-label="Send email"  icon={<FiMinus />} />
                        )}
                        <div className="number">{roomsCounter}</div>
                        <IconButton onClick={handleIncrementRoomsNumber} size="sm" rounded="full" variant="outline" colorScheme="brand" aria-label="Send email" icon={<BsPlus />} />
                    </div>
                </div>
                <div className="type_container d-flex justify-content-between mb-5 mt-5">
                    <div className="right_container">
                        <h4 className="fs-5 text-center fw-bold">عدد الاسرة المفردة </h4>
                    </div>

                    <div className="left_container">
                        <IconButton onClick={handleFamilyCountDecrement} size="sm" rounded="full" variant="outline" colorScheme="brand" aria-label="Send email"  icon={<FiMinus />} />
                        <div className="number">{familyCounter}</div>
                        <IconButton onClick={handleFamilyCountIncrement} size="sm" rounded="full" variant="outline" colorScheme="brand" aria-label="Send email" icon={<BsPlus />} />
                    </div>
                </div>
                <div className="type_container d-flex justify-content-between">
                    <div className="right_container">
                        <h4 className="fs-5 text-center fw-bold">عدد الاسرة الماستر </h4>
                    </div>

                    <div className="left_container">
                        <IconButton onClick={handleMasterCountDecrement} size="sm" rounded="full" variant="outline" colorScheme="brand" aria-label="Send email"  icon={<FiMinus />} />
                        <div className="number">{masterCounter}</div>
                        <IconButton onClick={handleMasterCountIncrement} size="sm" rounded="full" variant="outline" colorScheme="brand" aria-label="Send email" icon={<BsPlus />} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Roomdetails;
