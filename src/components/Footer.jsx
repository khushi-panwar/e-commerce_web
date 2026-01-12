import React from 'react'
import { LuFacebook } from "react-icons/lu";
import { FiTwitter, FiYoutube, FiInstagram  } from "react-icons/fi";
import { Link } from 'react-router';


const Footer = () => {
  return <footer className='bg-slate-900 shadow-md'>
    <div className='container mx-auto px-4'>
        <div className='min-h-10 '>
            <div className='flex justify-between items-center flex-col md:flex-row py-10'>
                <h2 className='text-4xl font-bold text-white'>Subscribe Our Newslatter </h2>
                <form className='md:w-1/3 w-full mt-8 md:mt-0 relative'>
                    <input 
                        type='text'
                        placeholder='Enter Your Email'
                        className='py-4 px-4 rounded shadow-md w-full'
                    />
                    <button className='bg-gray-200 py-3 px-4 rounded-full absolute right-3 top-1'></button>
                </form>
            </div>
        </div>
    </div>


    <div className='bg-slate-800 text-white py-8'>
        <div className='container mx-auto px-4'>
           <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 '>
            <div>
                <p>lorem2dsfbvasdjcvsjdgfgsfhsdcdshcvshgcf
                </p>
                <div className='flex items-center gap-8 mt-5'>
                    <LuFacebook size={30}
                    className='bg-white text-black rounded-md p-2 ' />
                    <FiTwitter size={30}
                    className='bg-white text-black rounded-md p-2 ' />
                    <FiYoutube size={30}
                    className='bg-white text-black rounded-md p-2 ' />
                    <FiInstagram size={30}
                    className='bg-white text-black rounded-md p-2 ' />
                </div>
            </div>
            <div>
                <h2 className='text-2xl font-semibold my-4'>Pages</h2>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">FAQs</Link>
                    </li>
                    <li>
                        <Link to="/">Contact</Link>
                    </li>
                </ul>
            </div>
            <div><h2 className='text-2xl font-semibold my-4'>Categories</h2>
                <ul>
                    <li>
                        <Link to="/">Monitors</Link>
                    </li>
                    <li>
                        <Link to="/">CPUs</Link>
                    </li>
                    <li>
                        <Link to="/">Laptops</Link>
                    </li>
                    <li>
                        <Link to="/">Power Supplies</Link>
                    </li>
                </ul></div>
            <div>
                <h2 className='text-2xl font-semibold my-4'>Description</h2>
                <p> gfshgfjhdbscjhgsdfhbscvsvsvcdsfsghdvcdvs ncbvshd hgvhvhgsc  dsgdsjcghjdsbchj</p>
                <p>34t237479324793525</p>
            </div>
           </div>
        </div>
    </div>


    <div className='container mx-auto text-center py-4 text-white'>
        <p>Copyright &copy; 2026 </p>
    </div>
  </footer>
}

export default Footer