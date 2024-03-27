import React from 'react'

const Sorting = ({setSort}) => {
	return (
		<div className='bg-gray-100 my-5 p-5 flex items-center justify-end'>
			<select
				name=''
				id=''
				className='bg-white py-2 px-4'onChange={(e)=>setSort(e.target.value)}>
				<option
					value=''
					disabled
					aria-disabled>
					Seçiniz
				</option>
				<option value='inc'>Artan</option>
				<option value='dec'>Azalan</option>
			</select>
		</div>
	);
};

export default Sorting