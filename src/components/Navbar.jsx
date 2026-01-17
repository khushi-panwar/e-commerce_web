import React, { useState } from 'react'
import { Link } from 'react-router'
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchItems } from '../redux/features/ProductSlice';
import { addToCart } from '../redux/features/CartSlice';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    //  searched Item
    const searchTerm = useSelector((state) => state.product.searchItem);
    // Get cart items array from Redux store
    const cartItems = useSelector((state) => state.cart.items);
    // Calculate total number of items in cart
    const itemCount = cartItems.reduce(
        (total , item) => total + item.quantity , 0)

    // user toggle
    const handleUser = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className='bg-white shadow-md'>
            <>
                <div className='py-4  shadow-md'>
                    <ul className='container mx-auto flex flex-wrap justify-between md:flex-row px-4 md:px-2 items-center'>
                        <div className='flex gap-4'>
                            <li>
                                <Link to='/' >Home</Link>
                            </li>
                            <li>
                                <Link to='/' >about</Link>
                            </li>
                            <li>
                                <Link to='/' >FAQ</Link>
                            </li>
                            <li>
                                <Link to='/' >Contact</Link>
                            </li>
                        </div>
                        <div className={`${isOpen ? "flex flex-col absolute right-0 md:right-0 top-12 z-10 bg-zinc-50 p-4 gap-4 " : "hidden"}`}>
                            <li><Link to='/'>Sign</Link></li>
                            <li><Link to='/'>My Account</Link></li>
                        </div>
                        <FaRegUser className='bg-gray-200 p-1 text-black rounded cursor-pointer' size={30}
                            onClick={handleUser}
                        />
                    </ul>
                </div>

                <nav className=' flex justify-between items-center container mx-auto md:py-6 py-8 px-2'>
                {/* logo */}
                    <div className='flex items-center'>
                        <Link to="/" className='bg-gray-700 py-2 px-4 rounded text-white'>
                            {/* <img src='' alt='Logo' /> */}
                            E-commerce
                        </Link>
                    </div>
                {/* search bar  */}
                    <form className='w-1/2 sm:block hidden'>
                        <input type='text' 
                        className='bg-zinc-100 rounded-md border border-zinc-200 focus:outline py-3 px-3 w-full'
                        placeholder='Search product'
                        value={searchTerm}
                        onChange={(e)=> dispatch(setSearchItems(e.target.value))}
                        />
                    </form>
                    <div className='relative'>
                        <Link to={"/cart"}>
                    {/* Cart icon that navigates to cart page */}
                        <MdOutlineShoppingCart size={50} className='cursor-pointer bg-gray-100 px-3 py-2 rounded-full' />
                        {/* Show item count badge only if items exist */}
                        {
                            itemCount > 0 && <span className='absolute flex -top-2 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 items-center justify-center  '>{itemCount}</span>
                        }
                    </Link>
                    </div>
                </nav>
            </>
        </header>
    )
}

export default Navbar