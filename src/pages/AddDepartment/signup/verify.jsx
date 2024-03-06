import './signup.css'
function Verify() {
    return (
        <>
            <div className='center mt-6'>
                <div className='container-form p-3'>
                    {/* ============ */}
                    <div className='text-center'>
                        <div className='fs-3 color-green fw-bold'>تأكيد التسجيل </div>
                    </div>
                    {/* ============ */}
                    <div className='text-end fs-4 fw-bold '> الرجاء إدخال الكود للمتابعة </div>
                    <div className='text-end  fw-bold color-gray mt-1'>    لقد أرسلنا الكود برسالة إلى الرقم <br /> <span>(5621782936+966)</span> </div>
                    {/* ============ */}
                    <div className='d-flex justify-content-center mt-3'>
                        <div>
                            <input type="phone" className='input-number mx-1' maxLength={1} />
                            <input type="phone" className='input-number mx-1' maxLength={1}/>
                            <input type="phone" className='input-number mx-1' maxLength={1}/>
                            <input type="phone" className='input-number mx-1' maxLength={1}/>
                            <input type="phone" className='input-number mx-1' maxLength={1}/>
                        </div>
                        
                    </div>
                    <div className='d-flex justify-content-center'>

                    <div className='btn btn-success w-75 mt-3 fs-5 fw-bold'>ارسال</div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Verify;