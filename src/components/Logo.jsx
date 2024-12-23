import React from 'react'
import logoImage from './Logo1.png'

function Logo({width ='50px'}) {
  return (
    <div> 
      <img src={logoImage}  alt="Logo" style={{width}} />
    </div>
  )
}

export default Logo

