import React, { useState } from "react";
import styles from "./Filter.module.css";
import Accordian from "../Accordians/Accordian";
import { Brands, Prices, Ratings } from "../../api/filterOption";

const Filter = () => {
  console.log(Brands);
  const BrandOptions = () => {
    return (
      <div className={styles.filterOption}>
        {Brands.map((brand) => (
          <label key={brand}>
            <input type="checkbox" name={brand} id={brand} />
            {brand}
          </label>
        ))}
      </div>
    );
  };

  const PriceRangeOption = () => {
    return (
      <div className={styles.filterOption}>
        {Brands.map((brand) => (
          <label key={brand}>
            <input type="checkbox" name={brand} id={brand} />
            {brand}
          </label>
        ))}
      </div>
    );
  };

  const RatingOption = () => {
    return (
      <div className={styles.filterOption}>
        {Brands.map((brand) => (
          <label key={brand}>
            <input type="checkbox" name={brand} id={brand} />
            {brand}
          </label>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.filterContainer}>
      <h1>Search Results</h1>

      <Accordian title={"Brands"} content={<BrandOptions />} />
      <hr />
      <Accordian title={"Price Range"} content={<PriceRangeOption/>} />
      <hr />
      <Accordian title={"Rating"} content={<RatingOption />} />


      {/* <div>
        <h4
          className={`${styles.filterHeader} ${
            isBrandsVisible ? styles.open : null
          }`}
          onClick={handleClickBrand}
        >
          Brand <img src={downArrow} alt="Brand" />
        </h4>
        {isBrandsVisible ? (
          <div className={styles.filterOption}>
            <label>
              {" "}
              <input type="checkbox" name="Mango" id="" />
              Mango
            </label>
            <label>
              {" "}
              <input type="checkbox" name="H&M" id="" />
              H&M
            </label>
            <label>
              {" "}
              <input type="checkbox" name="Adidas" id="" />
              Adidas
            </label>
            <label>
              {" "}
              <input type="checkbox" name="Allen Solly" id="" />
              Allen Solly
            </label>
          </div>
        ) : null}
      </div>
      <hr />
      <div>
        <h4
          className={`${styles.filterHeader} ${
            isPriceVisible ? styles.open : null
          }`}
          onClick={handlePriceRange}
        >
          Price Range
          <img src={downArrow} alt="Price Range" />
        </h4>
        {isPriceVisible ? (
          <div className={styles.filterOption}>
            <label>
              {" "}
              <input type="checkbox" name="under500" id="" />
              Under 500
            </label>
            <label>
              {" "}
              <input type="checkbox" name="1000to3000" id="" />
              1000 To 3000
            </label>
          </div>
        ) : null}
      </div>
      <hr />
      <div>
        <h4
          className={`${styles.filterHeader} ${
            isRatingVisible ? styles.open : null
          }`}
          onClick={handleRating}
        >
          Rating
          <img src={downArrow} alt="Rating" />
        </h4>
        {isRatingVisible ? (
          <div className={styles.filterOption}>
            <label>
              {" "}
              <input type="checkbox" name="5star" id="" />
              Under 500
            </label>
            <label>
              {" "}
              <input type="checkbox" name="4star" id="" />
              1000 To 3000
            </label>
            <label>
              {" "}
              <input type="checkbox" name="3star" id="" />
              Under 500
            </label>
            <label>
              {" "}
              <input type="checkbox" name="2star" id="" />
              Under 500
            </label>
            <label>
              {" "}
              <input type="checkbox" name="1star" id="" />
              Under 500
            </label>
          </div>
        ) : null}
      </div> */}
    </div>
  );
};

export default Filter;
