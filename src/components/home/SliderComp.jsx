import React from 'react'
import Slider from 'react-slick';

const SliderComp = () => {


  var settings = {
		infinite: true,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
    autoplaySpeed: 4000,
  };

	return (
		<Slider {...settings}>
			<div className='!flex items-center bg-gray-100 px-6'>
				<div className=''>
					<div className='text-6xl font-bold'>Ayakkabı ayakkabı olalı böyle fiyat görmedi...</div>
					<div className='text-lg my-4'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quaerat dignissimos maiores
						cum eaque praesentium similique dolorum. Rerum aliquid temporibus similique suscipit aperiam
						placeat nesciunt! Vel laboriosam impedit enim eligendi!
					</div>
					<div className='border rounded-full text-2xl cursor-pointer w-52 h-16 flex items-center bg-gray-200 justify-center'>
						İncele
					</div>
				</div>
				<img
					src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c0ccab78-b8a6-4cf2-b95b-4b900f730fe0/react-vision-ayakkab%C4%B1s%C4%B1-L4sXRR.png'
					alt=''
				/>
			</div>
			<div className='!flex items-center bg-gray-100 px-6'>
				<div className=''>
					<div className='text-6xl font-bold'>Ayakkabı ayakkabı olalı böyle fiyat görmedi...</div>
					<div className='text-lg my-4'>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quaerat dignissimos maiores
						cum eaque praesentium similique dolorum. Rerum aliquid temporibus similique suscipit aperiam
						placeat nesciunt! Vel laboriosam impedit enim eligendi!
					</div>
					<div className='border rounded-full text-2xl cursor-pointer w-52 h-16 flex items-center bg-gray-200 justify-center'>
						İncele
					</div>
				</div>
				<img
					src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9f03aaf4-5419-43a1-a50e-eb0e9393b709/full-force-low-ayakkab%C4%B1s%C4%B1-sQzNjs.png'
					alt=''
				/>
			</div>
		</Slider>
	);
};

export default SliderComp;