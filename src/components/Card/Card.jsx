import React, { useState } from 'react';
import styles from './Card.module.css';
import demoImg from "../../assets/demo.png";

const Card = ({ type, title, image, price }) => {
  const isSuggestion = type === 'suggestion';
  const isProduct = type === 'product';

  const [toggle,setToggle]=useState(false)


  const handleWishlist=()=>{
setToggle(!toggle)
  }
  return (
    <div className={styles.card}>
      {isSuggestion ? (
        <>
          <img src={demoImg} alt="Suggestion" />
          <h3>Suggestions Title</h3>
        </>
      ) : isProduct ? (
        <>
          
          <img src={image} alt="Product" />

          <h3>{title.slice(0, 20)}</h3>
          <p className={styles.price}><span className={styles.canceledPrice}>RS.{Math.floor(price + Math.random() * 10)}</span> RS.{price}</p>
          <button onClick={handleWishlist}>
          </button>
        </>
      ) : (
        <p>Invalid attribute</p>
      )}
    </div>
  );
};

export default Card;
