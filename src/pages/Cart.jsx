import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart, getCartTotal } from '../redux/cartSlice';

const Cart = () => {
	const dispatch = useDispatch();
    const { carts, totalAmount } = useSelector((state) => state.carts);



	useEffect(() => {
        dispatch(getCartTotal());

	}, [dispatch]);

	const handleRemoveFromCart = (id, quantity, price) => {
		dispatch(removeFromCart({ id, quantity, price }));
	};


	const handleClearCart = () => {
		dispatch(clearCart());
	};


    const totalItem = carts.reduce((total, item) => total + item.quantity, 0);

	return (
		<div className='container mx-auto'>
			<h2 className='text-3xl font-semibold my-4'>Shopping Cart</h2>
			{carts.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<>
					<div className='flex flex-col gap-4'>
						{carts.map((product) => (
							<div
								key={product.id}
								className='flex gap-5 h-40 border rounded-lg p-4'>
								<div>
									<img
										src={product.image}
										alt=''
										className='object-contain h-full'
									/>
								</div>
								<div
									key={product.id}
									className='h-40'>
									<h3 className='text-lg font-semibold'>{product.title}</h3>
									<p>Quantity: {product.quantity}</p>
									<p>Price: {product.price * product.quantity} TL</p>
									<button
										onClick={() =>
											handleRemoveFromCart(product.id, product.quantity, product.price)
										}
										className='bg-red-500 text-white py-2 px-4 mt-2 rounded hover:bg-red-600'>
										Remove
									</button>
								</div>
							</div>
						))}
					</div>
					<div className='mt-8'>
						<p className='text-lg font-semibold'>Total Items: {totalItem}</p>
						<p className='text-lg font-semibold'>Total Amount: {totalAmount} TL</p>
						<button
							onClick={handleClearCart}
							className='bg-blue-500 text-white py-2 px-4 mt-2 rounded hover:bg-blue-600'>
							Clear Cart
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default Cart;
