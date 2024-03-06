import { Input } from "@chakra-ui/react";
function Place3() {
    return (
        <>
            <div className="center">
                <div className="container-cus p-3 mt-6">
                    <div className="color-green fs-4 fw-bold me-3"> تاكيد عنوان العقار  </div>
                    {/* =========================== */}
                    <form>
                        <label className="fs-4 fw-bold mb-2">المدينة</label>
                        <Input focusBorderColor="brand.500" placeholder="الرياض" size="lg" />
                        {/* ============================== */}
                        <label className="fs-4 fw-bold mb-2">الحي</label>
                        <Input focusBorderColor="brand.500" size="lg" />
                        {/* ============================== */}
                        <label className="fs-4 fw-bold mb-2" >الاتجاه</label><br />
                        <label className="color-gray fs-6"> اختر اتجاه الحي ف المدينة </label>
                        <Input focusBorderColor="brand.500" size="lg" />

                    </form>
                </div>
            </div>
        </>
    )
}
export default Place3;