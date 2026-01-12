import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
// import products from // import all product from api --- 


const ProductGrid = ({products, loading}) => {
    

    // console.log(products);
    if (loading) return <p>Loading...</p>;
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 my-24'>
            {
                products.map((item) => {
                    return (
                        <ProductCard key={item.id} product={item} />
                    )
                })
            }
        </div>
    )
}

export default ProductGrid