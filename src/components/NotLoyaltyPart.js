import React from 'react'
import Header from './Header'
import PoweredBy from './PoweredBy'

function NotLoyaltyPart() {
  return (
    <div>
      <Header />
      <div className="error-panel mt-3">
        <div className="error-panel-body">
          <img src="images/error-icon.svg" alt="error-icon" />
          <p>Oops! You are not part of supported Loyalty programs!</p>
        </div>
        <div className="error-panel-footer">
          <img src="images/cards-set.png" alt="cards-img" />
          <p>Supported Loyalty programs Zillion, Supercoin, Yes Bank, Intermiles, IndusInd Bank</p>
        </div>
      </div>

      <div className='go-back-btn'>
          <button className='comman-btn mt-5'>Go Back</button>
      </div>

      <PoweredBy/>
    </div>
  )
}

export default NotLoyaltyPart
