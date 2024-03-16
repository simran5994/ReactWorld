import { useState, useEffect } from "react";
import { SWIGGY_API } from "../common/constants";

const useBodyMenu = () => {
	const [listOfRestaurants, setListOfRestaurants] = useState([]);

	useEffect(() => {
		fetchData();

		setInterval(async () => {
			fetchData();
		}, 60000);
	}, []);

	const fetchData = async () => {
		const data = await fetch(SWIGGY_API);
		const json = await data.json();
		const restData =
			json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
				?.restaurants;
		setListOfRestaurants(restData);
		// setFetchedData(restData);
		console.log(restData);
	};

	return listOfRestaurants;
};

export default useBodyMenu;
