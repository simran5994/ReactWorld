import { useRouteError } from "react-router-dom";

const Error = () => {
	const err = useRouteError();

	return (
		<div className='error'>
			<h2> OOPS.... Something went wrong</h2>
			<h3>
				{err.status} : {err.statusText}
			</h3>
		</div>
	);
};

export default Error;
