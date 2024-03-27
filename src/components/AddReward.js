import React from 'react';
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import PoweredBy from './PoweredBy'
import { BASE_API_URL } from '../constants';


function AddReward() {
    const navigate = useNavigate();

    function navigateLoader() {
        fetch(`${BASE_API_URL}/gw/create-loyalty-pass`, {

        })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                navigate('/loader');
            })
    }

    return (
        <div>
            <Header />
            <div className='add-reward-sec'>
                <h3>Add Loyalty Cards to Wallet</h3>
                <p>Securely store loyalty cards for quick access</p>

                <div className='my-loyalty-card-head'>
                    <p>My Loyalty Cards</p>
                    <div className='select-all'>
                        <div className="custom-checkbox">
                            <input type="checkbox" id="selectAll" defaultChecked />
                            <label htmlFor="selectAll">Select All</label>
                        </div>
                    </div>
                </div>

                <div className='card-item-outer'>
                    <div className='card-item '>
                        <div>
                            <img src="images/zillion-logo.svg" alt="" />
                            <span>Zillion</span>
                        </div>
                        <div className="custom-checkbox">
                            <input type="checkbox" id="zillion" />
                            <label htmlFor="zillion"></label>
                        </div>
                    </div>
                    <div className='card-item'>
                        <div>
                            <img src="images/supercoin-logo.svg" alt="" />
                            <span>Supercoins</span>
                        </div>
                        <div className="custom-checkbox">
                            <input type="checkbox" id="supercoin" />
                            <label htmlFor="supercoin"></label>
                        </div>
                    </div>
                    <div className='card-item'>
                        <div>
                            <img src="images/yesbank-logo.svg" alt="" />
                            <span>Yes Bank</span>
                        </div>
                        <div className="custom-checkbox">
                            <input type="checkbox" id="yesBank" />
                            <label htmlFor="yesBank"></label>
                        </div>
                    </div>
                    <div className='not-supported-card'>
                        <div>
                            <img src="images/indusind-logo.svg" alt="" />
                            <span>IndusInd Bank</span>
                        </div>
                        <p className='card-error-msg'>IndusInd bank card do not support adding the
                            reward card to Google wallet at the moment</p>
                    </div>

                </div>
            </div>

            <PoweredBy />

            <div className='ftr-btn-sec'>
                <button onClick={navigateLoader} className='comman-btn'>
                    <img src="images/google-wallet-icon.png" alt="" />
                    Add to Google wallet
                </button>
            </div>

        </div>
    )
}

export default AddReward
