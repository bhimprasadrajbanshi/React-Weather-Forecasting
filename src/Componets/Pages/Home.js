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

    <div>
    <input type="text" className='inputfield' placeholder='Enter City' /> 
    <button type='button'><i className="fa-solid fa-magnifying-glass-location iconsearch"></i></button>
    </div>

      <div className="innerbox">

        <div className="location-item">

         <div className="location">
         <strong> 
          <p className='locName'>Nepal</p>
           <i>September 25, 2023</i>
          </strong>
         </div>

          <div  className="temperature">78 C</div>
        </div>

        <div className="weatherimage">
          <i className="fa-sharp fa-solid fa-cloud-sun-rain fa-beat-fade fa-lg"></i>
        </div>

      
        </div>
    </div>
    </div>
   </>
  )
}

export default Home
