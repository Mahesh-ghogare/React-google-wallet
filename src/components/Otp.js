import React, { useCallback, useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import PoweredBy from './PoweredBy'

const Otp = () => {
	const [otp, setOtp] = useState('');
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const handleNavigate = useCallback(() => {
		setLoading(true);
		fetch('https://fakestoreapi.com/products/1', {
			otp
		})
			.then(res => res.json())
			.then(json => {
				console.log(json)
				navigate('/add-reward', { replace: true });
			})
			.catch(() => {
				setLoading(false)
			})
	}, [navigate, otp])

	useEffect(() => {
		if (otp.length === 6) {
			handleNavigate();
		}
	}, [handleNavigate, otp.length])

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
					<button disabled={loading} onClick={(e) => {
						e.preventDefault();
						handleNavigate()
					}} className='comman-btn'>{loading ? 'Please wait...' : 'Submit'}</button>
				</form>

				<PoweredBy />
			</div>
		</>
	);
};

export default Otp;
