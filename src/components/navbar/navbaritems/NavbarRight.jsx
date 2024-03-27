import React, { useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { CiHeart } from 'react-icons/ci';
import { SlBasket } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const NavbarRight = () => {

	const dispatch = useDispatch();
	const { carts } = useSelector((state) => state.carts);
	let productNum;
	const totalOrder = carts.reduce((total, item) => total + item.quantity, 0);

	console.log('carts', carts);

	const navigate = useNavigate();

	useEffect(() => {
		dispatch(getCartTotal());
	}, [dispatch]);

	return (
		<div className='flex items-center gap-8'>
			<div className='flex items-center border p-3 rounded-full bg-gray-200'>
				<input
					type='text'
					placeholder='Arama yapınız...'
					className='outline-none bg-gray-200'
				/>
				<BiSearch size={28} />
			</div>
			<CiHeart size={28} />
			<div
				className='relative cursor-pointer'
				onClick={() => navigate('/cart')}>
				<div className='absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>
					{totalOrder}
				</div>
				<SlBasket size={28} />
			</div>
		</div>
	);
};

export default NavbarRight;
