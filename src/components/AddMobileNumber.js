import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import PoweredBy from './PoweredBy'
import { BASE_API_URL } from '../constants';
import { navigateOtp } from '../api.actions';

function AddMobileNumber() {

	const navigate = useNavigate();

	const [mobileNumber, setMobileNumber] = useState('');
	const [isValid, setIsValid] = useState(true);

	const handleChange = (event) => {
		const inputValue = event.target.value;
		setMobileNumber(inputValue);
		setIsValid(validateMobileNumber(inputValue));
	};

	const validateMobileNumber = (number) => {
		const regex = /^[0-9]{10}$/; // Regex to validate 10 digit mobile number
		return regex.test(number);
	};

	return (
		<div>
			<Header />
			<div className='verify-mobile-num-sec'>
				<h3>Verifying Mobile Number</h3>
				<p>We will send you a verification code to this number</p>
				<form action="">
					<div className='form-outer'>
						<div className='contry-code'>
							<img src="images/india-flag.svg" alt="flag-img" />
							<span>+91</span>
						</div>
						<div className='form-group'>
							<span>Mobile number</span>
							{/* <input className='form-control' type="text" /> */}
							<input
								className='form-control'
								type="text"
								value={mobileNumber}
								onChange={handleChange}
								maxLength={10}
							/>
						</div>

					</div>
					{!isValid && <p className='err-msg'>Please enter a valid 10 digit mobile number</p>}

					<button onClick={(e) => {
						e.preventDefault();
						navigateOtp({mobileNumber,onSuccessCallback: () => navigate('/otp')})
					}} className='comman-btn mt-5'>Send OTP</button>
				</form>
			</div>
			<PoweredBy />
		</div>
	)
}

export default AddMobileNumber
