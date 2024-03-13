import User from "./User";
import UserClass from "./UserClass";
import React from "react";
// const AboutUs = () => {
// 	return (
// 		<div className='about-us'>
// 			<h1>About Us</h1>
// 			<h2>This is Namaste React About Us Component</h2>
// 			{/* <User name='Shimran' /> */}
// 			<UserClass
// 				name={"Shimran - from class"}
// 				location={"Berhampur - from class"}
// 				contact={"@spanigra0527 - from class"}
// 			/>
// 		</div>
// 	);
// };

class AboutUs extends React.Component {
	constructor(props) {
		super(props);
		console.log("parent constructor");
	}
	componentDidMount() {
		console.log("parent component did mount");
	}
	componentDidUpdate() {
		console.log("parent component did update");
	}

	render() {
		console.log("parent render");

		return (
			<div className='about-us my-4 font-bold'>
				<h1>About Us</h1>
				<h2>This is Namaste React About Us Component</h2>
				{/* <User name='Shimran' /> */}
				<UserClass
					name={"Shimran - from class"}
					location={"Berhampur - from class"}
					contact={"@spanigra0527 - from class"}
				/>
			</div>
		);
	}
}

export default AboutUs;
