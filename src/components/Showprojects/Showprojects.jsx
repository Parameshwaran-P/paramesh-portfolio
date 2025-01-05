import React, { useState } from 'react'
import './Showproject.css'

const Showprojects = ({image, title, description, link}) => {

    const [show, setShow] = useState(false)
  return (
    <a href={link}>
        <div  className='showproject' onMouseEnter={()=>{setShow(true)}} onMouseLeave={()=>{setShow(false)}}>
        {
            show ? (
                <div className='projectContent'>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            ):(
                <img src={image} alt="" />
            )
        }
        </div>
    </a>
  )
}

export default Showprojects