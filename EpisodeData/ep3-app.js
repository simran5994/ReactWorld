import React from "react";
import ReactDOM from "react-dom";

// const heading = React.createElement(
// 	"h1",
// 	{ id: "heading" },
// 	"Welcome to React 🚀"
// );

//React Element
const s = <span> Shimran</span>;
const jsxHeading = <h1 id='heading'>Namaste React Element 🚀 {s}</h1>;

//React Component  - Functional Component
const Title = () => <h1 id='heading'>Namaste React Functional Component🥳 </h1>;

// 3 Ways to call the functional Component inside another
const HeaderComponent = () => {
	return (
		// Component Composition
		<div id='container'>
			<Title />
			{jsxHeading}
			<h2 id='heading'>Namaste from Component Composition </h2>
			{2 + 3}
			{Title()}
			<Title></Title>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
