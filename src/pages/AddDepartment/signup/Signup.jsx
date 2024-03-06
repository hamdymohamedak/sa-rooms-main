import './signup.css'
import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';


function LoginPhone (){
    const [phone, setPhone] = useState('');
    return (

        <>
            <div className="center mt-5">
                <div className='container-form p-3'>
                    {/* ============ */}
                    <div className='text-center'>
                        <div className='fs-4 color-green fw-bold'>تسجيل دخول</div>
                    </div>
                    {/* ============ */}
                    <div className='text-end fs-5 fw-bold'> اهلا بك ! </div>
                    {/* ============ */}
                    <div className='d-flex justify-content-center colmun'>
                        {/* ============ */}
                        <div className='phone'>
                            <PhoneInput
                                defaultCountry="sa" value={phone} onChange={(phone) =>  setPhone(phone)} />
                            <div className='btn btn-success w-100 mt-3 fs-5 fw-bold'>تسجيل</div>
                        </div>
                    </div>
                    {/* ============ */}
                    <div className='text-end'>
                        <div className='fs-7 fw-bold mt-2'>سنقوم بإرسال رسالة إلى الرقم المدخل تحتوي على كود للمتابعة.. تأكد من إدخال رقمك بشكل صحيح.</div>
                    </div>
                    {/* ============ */}

                    {/* ============ */}

                </div>
            </div>
            
        </>
    )
}
export default LoginPhone;