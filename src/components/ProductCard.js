import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../redux/actionTypes/actionTypes";
import { addToCart, removeFromCart } from "../redux/actionCreators/productActions";
import { MdDelete } from "react-icons/md"
import { useLocation } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  return (
    <div
      className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900 relative'
      key={product._id}
    >
      {pathname.includes("cart") && (<div className="font-bold bg-indigo-500 text-white absolute rounded-full top-2 right-2 h-8 w-8 grid place-items-center">{product.quantity}</div>)}
      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product.keyFeature.map((feature) => {
            return <li key={feature} className='text-sm '>{feature}</li>;
          })}
        </ul>
      </div>
      <div className='flex gap-2 mt-5 items-center justify-center'>
        {!pathname.includes("cart") && (<button
          className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'
          onClick={() => dispatch(addToCart(product))}
        >
          Add to cart
        </button>)}
        {
          pathname.includes("cart") && (<button
            className='bg-indigo-500 text-white  py-1 px-10 rounded-full flex items-center justify-center'
            onClick={() => dispatch(removeFromCart(product))}
          >
            <MdDelete />
          </button>)
        }
        {!pathname.includes("cart") && (<button
          title='Add to wishlist'
          className='bg-indigo-500  py-1 px-2 rounded-full'
        >
          <BiListPlus className='text-white' />
        </button>)}
      </div>
    </div >
  );
};

export default ProductCard;
