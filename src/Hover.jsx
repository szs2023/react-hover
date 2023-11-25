import React from 'react'
import './photo.css'
import img from './assets/images/black.png'
import imge from './assets/images/white.png'
import imag from './assets/images/black.png'
export default function Hover() {
  return (
    <div className="flex">
      <img src={img} width={300} alt=""/>
      <img src={imge} width={300} alt=""  className='photo'/>
      <img src={imag} width={300} alt="" />

    </div>
  )

}
