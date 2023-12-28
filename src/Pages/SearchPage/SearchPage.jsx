import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./SearchPage.module.css";
import Search from "../../components/Search/Search";
import SuggestionBox from "../../components/SuggestionBox/SuggestionBox";

const SearchPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navSection}>
        <NavBar />
      </div>
      <div className={styles.searchSection}>
        <Search />
      </div>
      <div>
        <SuggestionBox />
      </div>
    </div>
  );
};

export default SearchPage;
