import { BsPlus } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { IconButton } from "@chakra-ui/react";
import { useState } from "react";

function Bathdetails() {
  const [bathrooms, setBathrooms] = useState(3);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleIncrement = () => setBathrooms(bathrooms + 1);
  
  const handleDecrement = () => {
    if (bathrooms > 0) {
      setBathrooms(bathrooms - 1);
    }
  };

  const handleItemClick = (itemName) => {
    if (selectedItems.includes(itemName)) {
      setSelectedItems(selectedItems.filter(item => item !== itemName));
    } else {
      setSelectedItems([...selectedItems, itemName]);
    }
  };

  return (
    <div className="center">
      <div className="container-cus mt-6 p-3">
        <div className="me-3 color-green fs-4 fw-bold mb-3">تفاصيل دورات المياة</div>
        <div className="type_container d-flex mb-4 justify-content-between">
          <div className="right_container">
            <h4 className="fs-5 text-center fw-bold">عدد دورات المياة</h4>
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
            <div className="number">{bathrooms}</div>
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
              selectedItems.includes("رداء الحمام") ? "active" : ""
            }`}
            onClick={() => handleItemClick("رداء الحمام")}
            style={{ backgroundColor: selectedItems.includes("رداء الحمام") ? "green" : "",color:selectedItems.includes("رداء الحمام") ? "white" : "" }}
          >
            رداء الحمام
          </div>
          <div
            className={`cat p-2 text-center rounded-3 fs-5 fw-bold ${
              selectedItems.includes("جاكوزي") ? "active" : ""
            }`}
            onClick={() => handleItemClick("جاكوزي")}
            style={{ backgroundColor: selectedItems.includes("جاكوزي") ? "green" : "",color:selectedItems.includes("جاكوزي") ? "white" : ""  }}
          >
            جاكوزي
          </div>
          <div
            className={`cat p-2 text-center rounded-3 fs-5 fw-bold ${
              selectedItems.includes("مناديل") ? "active" : ""
            }`}
            onClick={() => handleItemClick("مناديل")}
            style={{ backgroundColor: selectedItems.includes("مناديل") ? "green" : "",color:selectedItems.includes("مناديل") ? "white" : "" }}

          >
            مناديل
          </div>
          <div
            className={`cat p-2 text-center rounded-3 fs-5 fw-bold ${
              selectedItems.includes("شامبو") ? "active" : ""
            }`}
            onClick={() => handleItemClick("شامبو")}
            style={{ backgroundColor: selectedItems.includes("شامبو") ? "green" : "",color:selectedItems.includes("شامبو") ? "white" : "" }}
          >
            شامبو
          </div>
          <div
            className={`cat p-2 text-center rounded-3 fs-5 fw-bold ${
              selectedItems.includes("دش") ? "active" : ""
            }`}
            onClick={() => handleItemClick("دش")}
            style={{ backgroundColor: selectedItems.includes("دش") ? "green" : "",color:selectedItems.includes("دش") ? "white" : "" }}
          >
            دش
          </div>
          <div
            className={`cat p-2 text-center rounded-3 fs-5 fw-bold ${
              selectedItems.includes("حوض استحمام") ? "active" : ""
            }`}
            onClick={() => handleItemClick("حوض استحمام")}
            style={{ backgroundColor: selectedItems.includes("حوض استحمام") ? "green" : "",color:selectedItems.includes("حوض استحمام") ? "white" : "" }}
          >
            حوض استحمام
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bathdetails;
