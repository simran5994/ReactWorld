import { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";

const User = (props) => {
	const [count, setCount] = useState(0);
	const [count2, setCount2] = useState(1);

	useEffect(() => {
		const timer = setInterval(() => console.log("helllo"), 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className='user-card'>
			<h1>Count: {count}</h1>
			<h1>Count2: {count2}</h1>
			<h2>Name: {props.name}</h2>
			<h3>Location: Odisha</h3>
			<h3>Contact: @spanigra0527</h3>
		</div>
	);
};

export default User;
