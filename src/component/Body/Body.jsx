import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
// import { resList } from "../../common/mockData";
import { SWIGGY_API } from "../../common/constants";

const Body = () => {
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [fetchedData, setFetchedData] = useState([]);

	const [showClear, setShowClear] = useState(false);
	const [searchText, setSearchText] = useState("");

	const filterSearch = (value) => {
		const searchValue = listOfRestaurants.filter(
			(item) =>
				item.info.name.toLowerCase().includes(value) ||
				item.info.cuisines
					.join(", ")
					.toLowerCase()
					.includes(value.toLowerCase())
		);
		console.log(searchValue);
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

	return fetchedData.length === 0 ? (
		<Shimmer />
	) : (
		<div className='body'>
			<div className='body-header'>
				<div className='search'>
					<input
						type='text'
						placeholder='Search your items'
						value={searchText}
						onChange={(e) => {
							setSearchText(e.target.value);
						}}
					></input>
					<button
						className='search-btn'
						onClick={() => filterSearch(searchText)}
					>
						Search
					</button>
				</div>
				<div className='filter'>
					<button
						className='filter-btn'
						onClick={() => {
							const filteredList = listOfRestaurants.filter(
								(i) => i.info.avgRating > 4.1
							);
							console.log(filteredList);
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
			<div className='res-container'>
				{fetchedData.map((i) => (
					<RestaurantCard key={i.info.id} resData={i} />
				))}
			</div>
		</div>
	);
};

export default Body;
