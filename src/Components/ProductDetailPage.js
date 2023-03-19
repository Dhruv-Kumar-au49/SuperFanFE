
import { useState, useEffect } from "react";

const ProductDetailPage = () => {
  useEffect(() => {
    fetchProduct();
  }, []);

  

  const [product, setProduct] = useState({});

  const fetchProduct = async () => {
    let result = await  fetch(`https://fortnite-api.com/v2/cosmetics/br/`)
    let product = await result.json();
    console.log(product.data);
    setProduct(product.data)
  };

  return (

    <div >
       <h1>{product.name}</h1>
   item detils page
    </div>
  );
};

export default ProductDetailPage;
