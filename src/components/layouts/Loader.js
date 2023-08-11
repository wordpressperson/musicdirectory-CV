import React from 'react';
import LoaderImage from '../../assets/loading.gif';

const Loader = (props) => {
	return (
		<div>
		<img
    alt="File Loading..."
    style={{width: '85px', margin: '40px auto', display: 'block'}}
		src={LoaderImage}
		/>

		</div>
		)
}

export default Loader;
