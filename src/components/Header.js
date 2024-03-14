import React from 'react';
import { useNavigate } from 'react-router-dom'


function Header() {
  
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1)
  };

  return (
    <div>
      <div className='top-header'>
        <img onClick={handleGoBack} src="images/left-arrow.png" alt="back-arrow-img" />
      </div>
    </div>
  )
}

export default Header

