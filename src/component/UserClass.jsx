import React from "react";
import { GIT_USER_API } from "../common/constants";

class UserClass extends React.Component {
	constructor(props) {
		console.log("child constructor");

		super(props); // cannot ignore writing it . y do we always have to write super(props)
		this.state = {
			count: 0,
			userDetails: {
				name: "uuu",
				location: "Odisha",
				contact: "97762",
			},
		};
	}

	async componentDidMount() {
		console.log("child component did mount");
		// const getData = fetch(GIT_USER_API)
		// 	.then((j) => j.json())
		// 	.then((data) => this.setState({ userDetails: data}));
		const getData = await fetch(GIT_USER_API);
		const j = await getData.json();
		this.setState({ userDetails: j });
		this.timer = setInterval(() => console.log("helllo"), 1000);
	}

	componentDidUpdate() {
		console.log("child component did update");
	}

	componentWillUnmount() {
		clearInterval(this.timer);
		console.log("child component will unmount");
	}

	render() {
		console.log("child render");

		// const { name, location, contact } = this.props;
		const { count } = this.state;
		const { name, location, contact, avatar_url } = this.state.userDetails;

		return (
			<div className='user-card'>
				{/* <h1>Count: {count}</h1>
				<button
					className='count'
					onClick={() => {
						this.setState({ count: this.state.count + 1 });
					}}
				>
					Add Count
				</button> */}
				<img src={avatar_url}></img>
				<h2>Name: {name}</h2>
				<h3>Location: {location}</h3>
				<h3>Contact: {contact}</h3>
			</div>
		);
	}
}

export default UserClass;
