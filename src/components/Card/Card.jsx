import React from 'react'
import styles from './Card.module.css'
import demoImg from "../../assets/demo.png"


const Card = ({type}) => {
    const isSuggestion = type === 'suggestion';
    const isProduct = type === 'product';
  return (
    <div className={styles.card}>
      {isSuggestion ? (
        <>
          <img src={demoImg} alt="Suggestion" />
          <h3>Suggestions Title</h3>
        </>
      ) : isProduct ? (
        <>
          <img src={demoImg} alt="Product" />
          <h3>Product Title</h3>
          <p>Description </p>
          <p>Price: $19.99</p>
        </>
      ) : (
        <p>Invalid attribute</p>
      )}
    </div>
  )
}

export default Card
