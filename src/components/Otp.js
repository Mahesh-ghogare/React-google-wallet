import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import PoweredBy from './PoweredBy'

const Otp = () => {

    const [otp, setOtp] = useState('');

    const navigate = useNavigate();

    function handleNavigate() {
        navigate('/add-reward', { replace: true })
    }

    return (
        <>
            <Header />
            <div className='verify-mobile-num-sec'>
                <h3>OTP Verifications</h3>
                <p>Please enter the OTP sent to you via SMS</p>
                <form action="">
                    <div className='otp-form-outer'>
                        <OtpInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            renderSeparator={<span> </span>}
                            renderInput={(props) => <input {...props} />}
                        />
                    </div>
                    <button onClick={handleNavigate} className='comman-btn'>Submit</button>
                </form>

                <PoweredBy />
            </div>
        </>
    );
};

export default Otp;
