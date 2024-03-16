import React, { useState, useEffect, useContext } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
// import { resList } from "../../common/mockData";
import { SWIGGY_API } from "../../common/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import useBodyMenu from "../../utils/useBodyMenu";

const Body = () => {
	const listOfRestaurants = useBodyMenu();
	const [fetchedData, setFetchedData] = useState([]);

	const [showClear, setShowClear] = useState(false);
	const [searchText, setSearchText] = useState("");

	const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
	const checkOnline = useOnlineStatus();

	const filterSearch = (value) => {
		const searchValue = listOfRestaurants.filter(
			(item) =>
				item.info.name.toLowerCase().includes(value) ||
				item.info.cuisines
					.join(", ")
					.toLowerCase()
					.includes(value.toLowerCase())
		);
		searchValue.length === 0
			? setFetchedData(listOfRestaurants)
			: setFetchedData(searchValue);
	};

	const handleScroll = () => {
		if (
			window.innerHeight + document.documentElement.scrollTop ===
			document.documentElement.offsetHeight
		) {
			console.log("fetch data");
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		setFetchedData(listOfRestaurants);
	}, [listOfRestaurants]);

	const { loggedInUser, setUserName } = useContext(UserContext);

	if (checkOnline === false) {
		return (
			<h1>
				Looks like you are offline...Please check your internet connection
			</h1>
		);
	}

	return fetchedData.length === 0 ? (
		<Shimmer />
	) : (
		<div className='body border-2 border-black-500'>
			<div className='body-header flex p-4 item-center'>
				<div className='search'>
					<input
						type='text'
						placeholder='Search your items'
						className='px-4 py-2 '
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
					></input>
					<button
						className='search-btn px-4 py-2 bg-green-100 m-4 rounded-lg'
						onClick={() => filterSearch(searchText)}
					>
						Search
					</button>
				</div>
				<div className='filter'>
					<button
						className='filter-btn px-4 py-2 m-4 bg-gray-200 m-4 rounded-lg'
						onClick={() => {
							const filteredList = listOfRestaurants.filter(
								(i) => i.info.avgRating > 4.3
							);
							setFetchedData(filteredList);
							setShowClear(true);
						}}
					>
						Top rated Restaurant
					</button>
					{showClear && (
						<button
							className='filter-btn mx-2'
							onClick={() => {
								setFetchedData(listOfRestaurants);
								setShowClear(false);
							}}
						>
							❌
						</button>
					)}
					<label>UserName : </label>
					<input
						className='border border-black px-4'
						value={loggedInUser}
						onChange={(e) => setUserName(e.target.value)}
					></input>
				</div>
			</div>
			<div className='res-container flex flex-wrap'>
				{fetchedData.map((i) => (
					<Link key={i.info.id} to={"/restaurants/" + i.info.id}>
						{/** if the rest is promoted then add a promoted label to it */}
						{i?.info?.isOpen ? (
							<RestaurantCardPromoted resData={i} />
						) : (
							<RestaurantCard resData={i} />
						)}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
