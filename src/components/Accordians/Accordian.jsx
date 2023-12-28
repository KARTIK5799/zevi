import React, { useState } from 'react'

const Accordian = ({title,content}) => {
    const [isOpen ,setIsOpen]=useState(false);

    const handleToggle=()=>{
        setIsOpen(!isOpen)
    }
  return (
    <div>
      <h4 onClick={handleToggle}>{title}</h4>
    </div>
  )
}

export default Accordian
