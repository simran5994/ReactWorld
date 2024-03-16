import React from "react";
import ReactDOM from "react-dom";
import Parent from "./component/Parent";

const TestComponent = () => {
	return (
		<div className='app'>
			<Parent />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TestComponent />);
