import React from "react";
import ReactDOM from "react-dom";
import Header from "./component/Header/Header";
import Body from "./component/Body/Body";
import Footer from "./component/Footer/Footer";

const AppLayoutComponent = () => {
	return (
		<div className='app'>
			<Header />
			<Body />
			<Footer />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComponent />);
