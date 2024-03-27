import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/categorySlice';

const Categori = ({ setCategory }) => {
	const dispatch = useDispatch();
	const { categories } = useSelector((state) => state.categories);

	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);

	return (
		<div className='w-1/6 bg-gray-100 p-4 max-h-screen'>
			<div className='border-b pb-1 text-xl font-bold mb-2 px-2'>KATEGORİ</div>
			{categories?.map((item, i) => (
				<div
					key={i}
          className='text-lg cursor-pointer hover:bg-green-200 p-2 rounded-md'
        onClick={()=>setCategory(item)}>
					{item}
				</div>
			))}
		</div>
	);
};

export default Categori;
