import  { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Filter from "../../components/Filter/Filter";
import Products from "../../api/api";
import Card from "../../components/Card/Card";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filterdProducts,setFilterdProducts]=([]);
  
  const fetchData = async () => {
    try {
      const data = await Products();
      setProducts(data);
    } catch (error) {
      console.error("Error in fetching Products", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilterChange=(filters)=>{
    const filterd=products.filter((product)=>{
      return(
        filters.categories.
      )
    })
  }

  return (
    <div>
      <NavBar place={"product"} />
      <div className={styles.productPage}>
        <div>
          <Filter onFilterChange={handleFilterChange} />
        </div>
        <div className={styles.productSection}>
          {products &&
            products.map((product) => (
              <div key={product.id}>
                <Card
                  type={"product"}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
