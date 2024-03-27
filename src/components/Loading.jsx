import React from 'react'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Loading = () => {

    const loadInfo = () =>
		toast.info(`Loading...`, {
			position: 'top-center',
			autoClose: 3000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'colored',
			transition: Bounce,
        });

    loadInfo();
  return (
		<div>
			<ToastContainer />
		</div>
  );
}

export default Loading;