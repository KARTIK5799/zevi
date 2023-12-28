import React from 'react';
import styles from './SuggestionBox.module.css';
import Card from '../Card/Card';

const SuggestionBox = () => {
  return (
   <div className={styles.container}>
     <div className={styles.suggestionBox}>
      <div className={styles.trendSection}>
        <h3>Latest Trends</h3>
       <div className={styles.cardSection}>
       <Card type="suggestion" />
       <Card type="suggestion" />
       <Card type="suggestion" />
       <Card type="suggestion" />
       <Card type="suggestion" />
       </div>
       <div>
       <h3>Popular suggestions</h3>

       <div className={styles.suggestionTitles}>
        <p>suggestion text</p>
        <p>suggestion text</p>
        <p>suggestion text</p>
        <p>suggestion text</p>
       </div>

       </div>
      </div>
    </div>

   </div>
  );
};

export default SuggestionBox;