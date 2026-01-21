import React from 'react'
import {  Route, Routes } from 'react-router'
import Home from '../pages/Home'
import ProductDetails from '../pages/ProductDetails'
import CartPage from '../pages/CartPage'
import SignInPage from '../pages/SignInPage'
import LoginPage from '../pages/LoginPage'

const AppRoute = () => {
    return (
        <div>
            <Routes >
                <Route path='/' element={<Home />} />
                <Route path='/product/:id' element={<ProductDetails />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/signin' element={<SignInPage />} />
                <Route path='/login' element={<LoginPage />} />
            </Routes>
        </div>
    )
}

export default AppRoute