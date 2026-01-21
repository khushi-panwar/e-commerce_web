import React, { useState } from 'react'
import { Link } from 'react-router'
import { FaRegUser, FaBars, FaTimes } from "react-icons/fa"
import { MdOutlineShoppingCart } from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux'
import { setSearchItems } from '../redux/features/ProductSlice'
import  logo from '../assets/e-com-logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [userOpen, setUserOpen] = useState(false)

  const dispatch = useDispatch()
  const searchTerm = useSelector((state) => state.product.searchItem)
  const cartItems = useSelector((state) => state.cart.items)

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" >
          <img src={logo} alt='logo' className='h-10 object-contain'></img>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">FAQ</Link></li>
          <li><Link to="/">Contact</Link></li>
        </ul>

        {/* Search (Desktop) */}
        <input
          type="text"
          className="hidden md:block bg-zinc-100 border rounded px-3 py-2 w-72"
          placeholder="Search product"
          value={searchTerm}
          onChange={(e) => dispatch(setSearchItems(e.target.value))}
        />

        {/* Icons */}
        <div className="flex items-center gap-6 relative">
          <Link to="/cart" className="relative">
            <MdOutlineShoppingCart size={28} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {itemCount}
              </span>
            )}
          </Link>

          <FaRegUser
            size={26}
            className="cursor-pointer"
            onClick={() => setUserOpen(!userOpen)}
          />

          {/* User Dropdown */}
          {userOpen && (
            <div className="absolute top-10 right-0 bg-white shadow-md p-3 rounded w-32">
              <Link to="/signin" className="block mb-2">Sign In</Link>
              <Link to="/" className="block">My Account</Link>
            </div>
          )}

          {/* Hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-50 px-4 pb-4">
          <input
            type="text"
            className="bg-zinc-100 border rounded px-3 py-2 w-full mb-4"
            placeholder="Search product"
            value={searchTerm}
            onChange={(e) => dispatch(setSearchItems(e.target.value))}
          />

          <ul className="flex flex-col gap-3">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">FAQ</Link></li>
            <li><Link to="/">Contact</Link></li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
