import React from 'react'

function Loader() {
    return (
        <div>
            <div className="loader-inner">
                <div className="spinner-outer">
                    <div class="spinner"></div>
                    <img className='lock-icon' src="images/lock-icon.png" alt="" />
                </div>
                <h3>Adding Loyalty Cards</h3>
                <p>Please don’t leave or close the app </p>
            </div>
        </div>
    )
}

export default Loader
