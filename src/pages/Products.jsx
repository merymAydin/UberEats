import { useEffect, useState } from 'react'
import { api } from "../api/axiosInstance";
import ProductCard from '../components/ProductCard';



const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [total, setTotal] = useState(0);
    const totalPages = Math.ceil(total / 25);



    useEffect(() => {
        async function fetchProducts() {
            setLoading(true);
            try {
                const response = await api.get("/products", {
                    params: {
                        limit: 25,
                        offset: (currentPage - 1) * 25
                    }
                });
                setProducts(response.data.products);
                setTotal(response.data.total);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }

        }

        fetchProducts();
    }, [currentPage]);



    return (
        <div>
            {loading ? ("loading") : (
                <div className="product-grid">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}

            <div>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNUmber) => (
                    <button onClick={() => setCurrentPage(pageNUmber)}>
                        {pageNUmber}
                    </button>
                ))}
            </div>

        </div>

    )
}

export default Products
