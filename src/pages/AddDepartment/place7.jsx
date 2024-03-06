import { BsPlus } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { IconButton } from "@chakra-ui/react";
import { useState } from "react";

function Kitchendetails() {
  const [counter, setCounter] = useState(5);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleIncrement = () => setCounter(counter + 1);

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleItemClick = (itemName) => {
    if (selectedItems.includes(itemName)) {
      setSelectedItems(selectedItems.filter((item) => item !== itemName));
    } else {
      setSelectedItems([...selectedItems, itemName]);
    }
  };

  return (
    <div className="center">
      <div className="container-cus mt-6 p-3">
        <div className="me-3 color-green fs-4 fw-bold mb-3">تفاصيل المطبخ</div>
        <div className="type_container d-flex mb-4 justify-content-between">
          <div className="right_container">
            <h4 className="fs-5 text-center fw-bold">عدد كراسي طاولة المطبخ</h4>
          </div>

          <div className="left_container">
            <IconButton
              onClick={handleDecrement}
              size="sm"
              rounded="full"
              variant="outline"
              colorScheme="brand"
              aria-label="Decrement"
              icon={<FiMinus />}
            />
            <div className="number">{counter}</div>
            <IconButton
              onClick={handleIncrement}
              size="sm"
              rounded="full"
              variant="outline"
              colorScheme="brand"
              aria-label="Increment"
              icon={<BsPlus />}
            />
          </div>
        </div>
        <hr />
        <div className="me-3 color-green fs-4 fw-bold mb-3">مرافق المطبخ</div>
        <div className="catigorys_container">
          <div
            className={`cat p-2 text-center rounded-3 fs-5 fw-bold ${
              selectedItems.includes("الة قهوة") ? "active" : ""
            }`}
            onClick={() => handleItemClick("الة قهوة")}
            style={{
              backgroundColor: selectedItems.includes("الة قهوة")
                ? "green"
                : "",
              color: selectedItems.includes("الة قهوة") ? "white" : "",
            }}
          >
            الة قهوة
          </div>
          <div
            className={`cat p-2 text-center rounded-3 fs-5 fw-bold ${
              selectedItems.includes("ثلاجة") ? "active" : ""
            }`}
            onClick={() => handleItemClick("ثلاجة")}
            style={{
              backgroundColor: selectedItems.includes("ثلاجة") ? "green" : "",
              color: selectedItems.includes("ثلاجة") ? "white" : "",
            }}
          >
            ثلاجة
          </div>
          <div
            className={`cat p-2 text-center rounded-3 fs-5 fw-bold ${
              selectedItems.includes("غلاية") ? "active" : ""
            }`}
            onClick={() => handleItemClick("غلاية")}
            style={{
              backgroundColor: selectedItems.includes("غلاية") ? "green" : "",
              color: selectedItems.includes("غلاية") ? "white" : "",
            }}
          >
            غلاية
          </div>
          <div
            className={`cat p-2 text-center rounded-3 fs-5 fw-bold ${
              selectedItems.includes("فريزر") ? "active" : ""
            }`}
            onClick={() => handleItemClick("فريزر")}
            style={{
              backgroundColor: selectedItems.includes("فريزر") ? "green" : "",
              color: selectedItems.includes("فريزر") ? "white" : "",
            }}
          >
            فريزر
          </div>
          <div
            className={`cat p-2 text-center rounded-3 fs-5 fw-bold ${
              selectedItems.includes("ميكرويف") ? "active" : ""
            }`}
            onClick={() => handleItemClick("ميكرويف")}
            style={{
              backgroundColor: selectedItems.includes("ميكرويف") ? "green" : "",
              color: selectedItems.includes("ميكرويف") ? "white" : "",
            }}
          >
            ميكرويف
          </div>
          <div
            className={`cat p-2 text-center rounded-3 fs-5 fw-bold ${
              selectedItems.includes("فرن") ? "active" : ""
            }`}
            onClick={() => handleItemClick("فرن")}
            style={{
              backgroundColor: selectedItems.includes("فرن") ? "green" : "",
              color: selectedItems.includes("فرن") ? "white" : "",
            }}
          >
            فرن
          </div>
          <div
            className={`cat p-2 text-center rounded-3 fs-5 fw-bold ${
              selectedItems.includes("اواني المطبخ") ? "active" : ""
            }`}
            onClick={() => handleItemClick("اواني المطبخ")}
            style={{
              backgroundColor: selectedItems.includes("اواني المطبخ")
                ? "green"
                : "",
              color: selectedItems.includes("اواني المطبخ") ? "white" : "",
            }}
          >
            اواني المطبخ
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kitchendetails;
