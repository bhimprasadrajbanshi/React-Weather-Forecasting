import React from 'react';
import './Style.css';


function Home() {
  return (
   <>
   <div className='main'>
    <div className="mainbox" >
    <div className="title">
      <h1>WEATHER FORCASTING</h1>
    </div>
      <div className="innerbox">
        <div className="location">
          <strong> 
          <p className='locName'>Nepal</p>
          Setember 25, 2023</strong>
        </div>
        <div className="weatherimage">
          <img src="https://e7.pngegg.com/pngimages/517/940/png-clipart-cloud-rain-sunlight-weather-cloud-text-cloud.png" alt="" />
        </div>
        </div>
    </div>
    </div>
   </>
  )
}

export default Home
