import React, { useCallback, useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import PoweredBy from './PoweredBy'
import { BASE_API_URL } from '../constants';

const Otp = () => {
	const [otp, setOtp] = useState('');
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const parsedData = JSON.parse(localStorage.getItem('reqOtpRes'));
	const { data } = parsedData;
	const [time, setTime] = useState(data?.countdown_timer);

	useEffect(() => {
		const intvl = setInterval(() => {
			if (time !== 0) {
				setTime(time - 1);
			} else {
				clearInterval(intvl);
			}
		}, 1000);
		return () => clearInterval(intvl)
	}, [time])

	const handleNavigate = useCallback(() => {
		setLoading(true);
		fetch(`${BASE_API_URL}/gw/validate-otp`, {
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
						// inputStyle={{backgroundColor: '#DBE8FD', border: '1px solid #DBE8FD'}}
						/>
					</div>

					{/* <p className='timer'>{time}</p> */}
					<p className='resend-otp'>Didn’t recieved OTP <span>Resend</span></p>

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
