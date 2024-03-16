import { useState } from "react";
import Child from "./Child";

const Parent = () => {
	const [tex, setTex] = useState("");
	const [showChild, setShowChild] = useState(false);
	const actionBtn = () => {
		setShowChild(true);
	};
	return (
		<div>
			<input
				type='text'
				placeholder='Enter your message'
				value={tex}
				onChange={(e) => {
					setTex(e.target.value);
				}}
			></input>
			<button onClick={actionBtn}> Show</button>
			{showChild && <Child message={tex} />}
		</div>
	);
};

export default Parent;
