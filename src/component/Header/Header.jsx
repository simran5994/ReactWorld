import React, { useState, useContext } from "react";
import { LOGO_URL } from "../../common/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
	const [btnName, setBtnName] = useState("Login");
	const onlineStatus = useOnlineStatus();
	const { loggedInUser } = useContext(UserContext);

	//Selector is a hook inside react - subscribing using selector
	const cart = useSelector((store) => store.cart.items);

	return (
		<div className='flex justify-between border-2 border-black-500 h-[180px]'>
			<div className='logo-container'>
				<img className='w-56' src={LOGO_URL} />
			</div>
			<div className='flex items-center'>
				<ul className='flex p-4 m-4'>
					<li className='px-4'>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
					<li className='px-4'>
						<Link to='/'>Home</Link>
					</li>
					<li className='px-4'>
						<Link to='about'>About Us</Link>
					</li>
					<li className='px-4'>
						<Link to='/contact'>Contact Us</Link>
					</li>
					<li className='px-4'>
						<Link to='/grocery'>Grocery</Link>
					</li>
					<li className='px-4 text-xl'>
						<Link to='/cart'>
							🛒 - ({cart.length} {cart.length > 1 ? "items" : "item"})
						</Link>
					</li>
					<button
						className='px-4'
						onClick={() => {
							btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
						}}
					>
						{btnName}
					</button>
					<li className='px-4'>{loggedInUser}</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
