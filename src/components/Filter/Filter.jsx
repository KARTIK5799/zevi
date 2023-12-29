import  { useEffect, useState } from "react";
import styles from "./Filter.module.css";
import Accordian from "../Accordians/Accordian";
import { Prices, Ratings } from "../../api/filterOption";
import Products from "../../api/api";

const Filter = ({onFilterChange}) => {
  const [categories, setCategories] = useState([]);

  const getCategories=async()=>{
    try {
      const data=await Products();
      const uniqueCategories = [...new Set(data.map(product => product.category))];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error(`their is something issue your data ${error}`)
    }

  }

  useEffect(()=>{
    getCategories();
   
  },[])

  const CategoriesOptions = () => {
    return (
      <div className={styles.filterOption}>
        {categories.map((category) => (
          <label key={category}>
            <input type="checkbox" name={category} id={category} />
            {category}
          </label>
        ))}
      </div>
    );
  };

  const PriceRangeOption = () => {
    return (
      <div className={styles.filterOption}>
        {Prices.map((price) => (
          <label key={price}>
            <input type="checkbox" name={price} id={price} />
            {price}
          </label>
        ))}
      </div>
    );
  };

  const RatingOption = () => {
    return (
      <div className={styles.filterOption}>
        {Ratings.map((rate) => (
          <label key={rate}>
            <input type="checkbox" name={rate} id={rate} />
            {rate}
          </label>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.filterContainer}>
      <h1>Search Results</h1>

      <Accordian title={"Categories"} content={<CategoriesOptions />} />
      <hr />
      <Accordian title={"Price Range"} content={<PriceRangeOption/>} />
      <hr />
      <Accordian title={"Rating"} content={<RatingOption />} />


      
    </div>
  );
};

export default Filter;
