import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
// import { resList } from "../../common/mockData";
import { SWIGGY_API } from "../../common/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [fetchedData, setFetchedData] = useState([]);

	const [showClear, setShowClear] = useState(false);
	const [searchText, setSearchText] = useState("");

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
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(SWIGGY_API);
		const json = await data.json();
		const restData =
			json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants;
		setListOfRestaurants(restData);
		setFetchedData(restData);
	};

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
						className='px-4 py-2'
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
								(i) => i.info.avgRating > 4.1
							);
							setListOfRestaurants(filteredList);
							setShowClear(true);
						}}
					>
						Top rated Restaurant
					</button>
					{showClear && (
						<button
							className='filter-btn'
							style={{ margin: "2px" }}
							onClick={() => {
								setFetchedData(fetchedData);
								setShowClear(false);
							}}
						>
							Clear
						</button>
					)}
				</div>
			</div>
			<div className='res-container flex flex-wrap'>
				{fetchedData.map((i) => (
					<Link key={i.info.id} to={"/restaurants/" + i.info.id}>
						<RestaurantCard resData={i} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
