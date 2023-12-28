import React, { useState } from 'react'
import downArrow from '../../assets/downArrow.png'
import styles from './Filter.module.css'

const Filter = () => {
    const [isBrandsVisible,setIsBrandsVisible]=useState(false)
    const [isPriceVisible,setIsPriceVisible]=useState(false)
    const [isRatingVisible,setIsRatingVisible]=useState(false);
   
    const handleClickBrand =()=>{
setIsBrandsVisible(!isBrandsVisible)
   }

   const  handlePriceRange=()=>{
    setIsPriceVisible(!isPriceVisible)
   }

   const handleRating=()=>{
    setIsRatingVisible(!isRatingVisible)
   }
  return (
    <div className={styles.filterContainer}>
      <h1>Search Results</h1>
      <div>
        <h4 className={styles.filterHeader} onClick={handleClickBrand}>Brand <img src={downArrow} alt="Brand" /></h4>
        {isBrandsVisible?(<div className={styles.filterOption}>
           <label> <input type="checkbox" name="Mango" id="" />Mango</label>
           <label> <input type="checkbox" name="H&M" id="" />H&M</label>
           <label> <input type="checkbox" name="Adidas" id="" />Adidas</label>
           <label> <input type="checkbox" name="Allen Solly" id="" />Allen Solly</label>
        </div>):null}
      </div>
      <hr/>
      <div>
        <h4 className={styles.filterHeader} onClick={handlePriceRange}>Price Range<img src={downArrow} alt="Price Range" /></h4>
        {isPriceVisible?(<div className={styles.filterOption}>
            <label> <input type="checkbox" name="under500" id="" />Under 500</label>
            <label> <input type="checkbox" name="1000to3000" id="" />1000 To 3000</label>
           
        </div>):null}
      </div>
      <hr/>
      <div>
        <h4 className={styles.filterHeader} onClick={handleRating}>Rating<img src={downArrow} alt="Rating" /></h4>
        {isRatingVisible?(<div className={styles.filterOption}>
            <label> <input type="checkbox" name="5star" id="" />Under 500</label>
            <label> <input type="checkbox" name="4star" id="" />1000 To 3000</label>
            <label> <input type="checkbox" name="3star" id="" />Under 500</label>
            <label> <input type="checkbox" name="2star" id="" />Under 500</label>
            <label> <input type="checkbox" name="1star" id="" />Under 500</label>
           
        </div>):null}
      </div>
    </div>
  )
}

export default Filter
