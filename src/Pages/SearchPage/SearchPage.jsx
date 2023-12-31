import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./SearchPage.module.css";
import Search from "../../components/Search/Search";
import SuggestionBox from "../../components/SuggestionBox/SuggestionBox";

const SearchPage = () => {
const[isSuggestionVisible,setIsSuggestionVisible]=useState(false)


const handleSearchClick=()=>{
setIsSuggestionVisible(true);
}

const handleSearchBlur=()=>{
  setIsSuggestionVisible(false);
}
  return (
    <div className={styles.container}>
      <div className={styles.navSection}>
        <NavBar place={"search"}/>
      </div>
      <div className={styles.searchSection}>
        <Search onClick={handleSearchClick} onBlur={handleSearchBlur} />
      </div>
      <div className={styles.suggestionSection}>
        {isSuggestionVisible && <SuggestionBox />}
      </div>
    </div>
  );
};

export default SearchPage;
