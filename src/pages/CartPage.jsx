import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router';
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { updateQuantity, removeFromCart } from '../redux/features/CartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart.items);
  const total = cartItem.reduce((sum, item) =>
    sum + item.price * item.quantity, 0
  );

  if (cartItem.length === 0) {
    return <div className='container mx-auto px-4 py-8 '>
      <div className='text-center'>
        <h2 className=''>Your Cart is Empty </h2>
        <p className=' text-gray-600 mb-4'>
          Add some products to your cart to see them here !!!
        </p>
        <Link to="/" className='inline-block bg-zinc-200 px-6 py-2 rounded-lg hover:bg-zinc-300'>Continue Shopping </Link>
      </div>
    </div>
  }

  return (
    <div className='container mx-auto  px-4 py-8'>
      <h2 className='text-2xl font-bold mb-8 '> Shopping Cart</h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 '>
        {/* left div */}
        <div className='lg:col-span-2 shadow-md p-4 rounded-md'>

          {cartItem.map((item) => (
            <div key={item.id} className='flex items-center gap-4 py-4 border-b'>
              <Link to={`/product/${item.id}`}>
                <img src={item.image} alt={item.title} className='w-24 h-24 object-cover rounded' />
              </Link>
              <div className='flex-1'>
                <Link to={`/product/${item.id}`} className='font-semibold hover:text-blue-600'>
                  {item.title}
                </Link>
                <p className='text-gray-600'>₹ {item.price}</p>
                <div className='flex items-center gap-2 mt-2'>
                  <button
                    className='p-1 rounded-full hover:bg-gray-200 '
                    onClick={() => dispatch(updateQuantity({
                      id: item.id,
                      quantity: Math.max(0, item.quantity - 1),
                    })
                    )}
                  >
                    <FiMinus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button className='p-1 rounded-full hover:bg-gray-200'
                    onClick={() => dispatch(updateQuantity({
                      id: item.id,
                      quantity: item.quantity + 1,
                    })
                    )}
                  >
                    <FiPlus size={16} />
                  </button>
                  <div className='ml-4 text-red-500 hover:text-red-700 cursor-pointer'
                  onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    <FiTrash2 size={20} />
                  </div>
                </div>
              </div>
              <div className='text-right'>
                <p className='font-bold'>₹ {(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}

        </div>
        {/* right div */}
        <div className='lg:col-span-1'>
          <div className='bg-white shadow-md p-6 rounded-md'>
            <h3 className='text-xl font-bold mb-4 '>Order Summary</h3>
            <div className='space-y-2 mb-4 '>
              <div className='flex justify-between '>
                <span className=''> Sub Total </span>
                <span className=''>₹ {(total).toFixed(2)}</span>
              </div>
              <div className='flex justify-between '>
                <span className=''> Shipping </span>
                <span className=''> Free </span>
              </div>
              <div className='flex justify-between border-t pt-2 font-bold '>
                <span className=''> Total </span>
                <span className=''>₹ {(total).toFixed(2)}</span>
              </div>
            </div>
            <button className='w-full bg-zinc-200 px-6 py-3 rounded-lg hover:bg-zinc-300'>Proceed to Checkout</button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default CartPage