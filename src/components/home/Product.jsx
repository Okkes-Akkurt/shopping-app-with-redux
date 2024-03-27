import React from 'react'
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
	const navigate = useNavigate();

	console.log('product', product);

  return (
		<div
			onClick={()=>navigate(`/products/${product?.id}`)}
			className='w-64 p-2 mb-4 mx-2 border rounded-md relative cursor-pointer'>
			<div className='text-2xl font-bold absolute rounded-md top-0 right-0 bg-pink-400 text-white p-2 m-1'>
				{product.price} <span className='text-sm'>TL</span>
			</div>
			<img
				src={product.image}
				alt=''
				className='w-56 h-56 object-contain m-auto'
			/>
			<div className='text-center my-1 mx-3 text-xl'>{product.title.substr(0, 25) + '...'}</div>
		</div>
  );
}

export default Product