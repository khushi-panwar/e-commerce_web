import React from 'react'
import {  Route, Routes } from 'react-router'
import Home from '../pages/Home'
import ProductDetails from '../pages/ProductDetails'
import CartPage from '../pages/CartPage'

const AppRoute = () => {
    return (
        <div>
            <Routes >
                <Route path='/' element={<Home />} />
                <Route path='/product' element={<ProductDetails />} />
                <Route path='/cart' element={<CartPage />} />
            </Routes>
        </div>
    )
}

export default AppRoute