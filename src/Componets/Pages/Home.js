import React from 'react'
import './Style.css'
import Background from '.../public/images/clouds-moving.gif'

function Home() {
  return (
   <>
    <div className="mainbox" style={{backgroundImage:'url(${Background})'}}>
        <h1>Heloo</h1>
    </div>
   </>
  )
}

export default Home
