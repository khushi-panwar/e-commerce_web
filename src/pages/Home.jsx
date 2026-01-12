import React, { useEffect, useState } from 'react'
import ProductGrid from '../components/ProductGrid'
import Footer from '../components/Footer'
import fetchData from "../utils/api"

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            let data;
            setLoading(true);
            try {
                const response = await fetchData();   //  WAIT HERE

                data = response.map((item) => ({     // Normalization of API data
                    id: item.id,
                    title: item.title,
                    image: item.thumbnail,
                    price: item.price,
                    description: item.description,
                    category: item.category,
                }));
                setProducts(data);

            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, []);


    const categories = [...new Set(products.map((item) => item.category))]; // Map over products to get categories, then use Set to ensure uniqueness


    return (
        <div>
            <div className='bg'></div>
            <div className='container mx-auto my-10 px-4'>
                <div className='flex gap-4'>
                    {
                        categories.map((cat) => {
                            return (
                                <button
                                    key={cat}
                                    className='bg-gray-300 py-2 px-4 rounded-md text-black active:scale-105 hover:bd-zin transition-all ease-in'>
                                    {cat}
                                </button>
                            )
                        })
                    }
                </div>


                {/* Product component */}
                <ProductGrid
                    products={products}
                    loading={loading}
                />

                <Footer />

            </div>
        </div>
    )
}

export default Home