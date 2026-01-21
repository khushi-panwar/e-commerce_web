import { useEffect, useState } from 'react'
import ProductGrid from '../components/ProductGrid'
import Footer from '../components/Footer'
import getProducts from '../utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { setProduces, setSelectedCategory } from '../redux/features/ProductSlice'

const Home = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.product.items); // get items from ProductSlice file
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            let normalizeData;
            setLoading(true);
            try {
                const response = await getProducts();   //  WAIT HERE

                normalizeData = response.map((item) => ({     // Normalization of API data
                    id: item.id,
                    title: item.title,
                    image: item.thumbnail,
                    price: item.price,
                    description: item.description,
                    category: item.category,
                }));
                // console.log(normalizeData);
                dispatch(setProduces(normalizeData))   // set product data in ProductSlice file 
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
            <div className='container mx-auto my-10 px-4'>
                <div className='flex gap-4'>
                    {
                        categories.map((cat) => {
                            return (
                                <button
                                    key={cat}
                                    onClick={() => dispatch(setSelectedCategory(cat))}
                                    className='bg-gray-300 py-2 px-4 rounded-md text-black active:scale-105 hover:bd-zin transition-all ease-in'>
                                    {cat}
                                </button>
                            )
                        })
                    }
                </div>


                {/* Product component */}
                <ProductGrid />

                <Footer />

            </div>
        </div>
    )
}

export default Home
