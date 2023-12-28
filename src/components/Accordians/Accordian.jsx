import React, { useState } from 'react'
import downArrow from "../../assets/downArrow.png";
import styles from "./Accordian.module.css"

const Accordian = ({title,content}) => {
    const [isOpen ,setIsOpen]=useState(false);

    const handleToggle=()=>{
        setIsOpen(!isOpen)
    }
  return (
    <div>
      <h4 className={`${styles.filterHeader} ${
            isOpen ? styles.open : null
          }`} onClick={handleToggle}>{title} <img src={downArrow} alt="Brand" /></h4>
      {isOpen && <div>{content}</div>}
    </div>
  )
}

export default Accordian;
