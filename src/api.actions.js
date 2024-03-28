import { BASE_API_URL } from "./constants";


export function navigateOtp({mobileNumber, onSuccessCallback = () => {}}) {
    fetch(`${BASE_API_URL}/gw/request-otp`, {
        mobileNumber
    })
        .then(res => res.json())
        .then(resData => {
            console.log(resData)
            const {status, message, error_code, data } = resData;
            localStorage.setItem('reqOtpRes', JSON.stringify(resData))
            localStorage.setItem('mobileNumber', mobileNumber)
            onSuccessCallback()
        }).catch(()=>{
            const resData = {
                "status": true,
                "message": "We have sent an OTP to your mobile number 9898989803!",
                "error_code": 0,
                "data": {
                    "countdown_timer": 120
                }
            }
            const {status, message, error_code, data } = resData;
            localStorage.setItem('reqOtpRes', JSON.stringify(resData))
            localStorage.setItem('mobileNumber', mobileNumber)
            onSuccessCallback()
            
        })

}


