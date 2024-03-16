import { useState, useEffect } from "react";

const Child = ({ message }) => {
	const [texts, setTexts] = useState([]);

	useEffect(() => {
		const timeoutIds = [];

		message.split(" ").forEach((text, i) => {
			const timeoutId = setTimeout(() => {
				setTexts((prev) => [...prev, text]);
			}, 2000 * i);

			timeoutIds.push(timeoutId);
		});
		return () => {
			timeoutIds.forEach((id) => clearTimeout(id));
		};
	}, []);
	return (
		<div>
			{texts.map((text) => (
				<span key={text}>{text} </span>
			))}
		</div>
	);
};

export default Child;
