import { useState, useEffect } from "react";
import { MENU_API } from "../common/constants";

//Custom Hook created
const useRestaurantMenu = (resId) => {
	const [restaurantData, setRestaurantData] = useState(null);
	useEffect(() => {
		fetchResData();
	}, []);

	const fetchResData = async () => {
		const data = await fetch(MENU_API + resId);
		const json = await data.json();
		setRestaurantData(json.data);
	};
	return restaurantData;
};

export default useRestaurantMenu;
