import React from "react";
import ReactDOM from "react-dom";

const TestComponent = () => {
	return <div className='app'>Hello World</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TestComponent />);
