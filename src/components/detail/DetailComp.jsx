import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const DetailComp = ({ productDetail }) => {
    const [ quantity, setQuantity ] = useState(1);
    const dispatch = useDispatch();

	const decreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(prev =>prev - 1);
		}
	};

	const increaseQuantity = () => {
		if(productDetail.rating.count>quantity)setQuantity((prev) => prev + 1);
	};

    const addBasket = () => {
        dispatch(addToCart({id:productDetail.id,title:productDetail.title,image:productDetail.image,quantity:quantity,price:productDetail.price}));
    }
	return (
		<div className='flex gap-10'>
			<img
				className='w-[700px] h-[700px] object-contain'
				src={productDetail.image}
				alt=''
				loading='lazy'
			/>
			<div className='flex flex-col justify-center'>
				<div className='text-4xl font-bold mb-4'>{productDetail?.title}</div>
				<div className='flex items-center text-xl mb-4'>
					<span className='font-bold mr-2'>Price:</span>
					<span className='text-green-500'>{productDetail?.price} TL</span>
				</div>
				<div className='text-lg mb-4'>{productDetail?.description}</div>
				<div className='flex items-center text-lg mb-4'>
					<span className='font-bold mr-2'>Rating:</span>
					<span className='text-yellow-500'>{productDetail?.rating?.rate}</span>
				</div>
				<div className='flex items-center text-lg mb-4'>
					<span className='font-bold mr-2'>Count:</span>
					<span className='text-blue-500'>{productDetail?.rating?.count} pcs.</span>
				</div>
				<div className='flex items-center mb-8'>
					<span className='font-bold mr-2'>Quantity:</span>
					<button
						onClick={decreaseQuantity}
						className='bg-gray-300 px-3 py-1 rounded-l-md'>
						-
					</button>
					<span className='bg-gray-100 px-3 py-1'>{quantity}</span>
					<button
						onClick={increaseQuantity}
						className='bg-gray-300 px-3 py-1 rounded-r-md'>
						+
					</button>
				</div>
				<button
					onClick={addBasket}
					className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default DetailComp;
