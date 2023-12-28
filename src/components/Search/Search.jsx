import React from 'react'
import SearchIcon from '../../assets/search.png'
import styles from "./Search.module.css"

const Search = ({onClick,onBlur}) => {
  return (
    <form action="submit" className={styles.form}>
        <div className={styles.formContent}>
          <input type="text" placeholder="Search" className={styles.inputField} onClick={onClick} onBlur={onBlur}/>
          <button type="submit" className={styles.searchButton}>
            <img src={SearchIcon} alt="Search"/>

          </button>
        </div>
      </form>
  )
}

export default Search;
