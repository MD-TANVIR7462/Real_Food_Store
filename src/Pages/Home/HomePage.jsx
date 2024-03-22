/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Card from "../../Components/ui/Card/Card";
import PriceCard from "../../Components/ui/PriceCard/PriceCard";

const HomePage = ({ text }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/db.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (text) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [text, products]);

  const updateTotalAmount = (amount) => {
    setTotalAmount((prevTotalAmount) => prevTotalAmount + amount);
    if (amount < 0) {
      setProductCount((prevCount) => prevCount - 1);
    } else {
      setProductCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-12 mt-8 md:mt-20  ">
        {filteredProducts.map((product) => (
          <Card
            product={product}
            key={product.id}
            updateTotalAmount={updateTotalAmount}
          />
        ))}
      </div>

      {productCount > 0 && (
        <PriceCard
          totalAmount={totalAmount}
          productCount={productCount}
        ></PriceCard>
      )}
    </div>
  );
};

export default HomePage;
