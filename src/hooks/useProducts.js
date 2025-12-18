import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useProducts = (filteringUrl) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const endPoint = "/products" + (filteringUrl ? `/${filteringUrl}` : ``);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await apiClient.get(endPoint);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [endPoint]);

  return { products, isLoading };
};

export default useProducts;
