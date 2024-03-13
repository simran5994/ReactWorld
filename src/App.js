import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import Header from "./component/Header/Header";
import Body from "./component/Body/Body";
import Footer from "./component/Footer/Footer";
import Contact from "./component/Contact";
import Error from "./component/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./component/Body/RestaurantMenu";
// import Grocery from "./component/Grocery";

const Grocery = lazy(() => import("./component/Grocery"));
const About = lazy(() => import("./component/AboutUs"));

const AppLayoutComponent = () => {
	return (
		<div className='app'>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayoutComponent />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/about",
				element: (
					<Suspense fallback={<h1>Loading.....</h1>}>
						<About />
					</Suspense>
				),
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/grocery",
				element: (
					<Suspense fallback={<h1>Loading......</h1>}>
						<Grocery />
					</Suspense>
				),
			},
			{
				path: "/restaurants/:resId",
				element: <RestaurantMenu />,
			},
		],
		errorElement: <Error />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
