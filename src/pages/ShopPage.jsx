import { useEffect, useState } from "react"
import { api } from "../api/axiosInstance"; 
import ProductCard from "../components/ProductCard";


const ShopPage = () => {
  const [products,setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await api.get("/products");
            setProducts(response.data.products);
        }
        fetchProducts();
    }, [])



  return (
    <div className="flex flex-wrap">
      {products.map(product=>(
        <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  )
}

export default ShopPage
