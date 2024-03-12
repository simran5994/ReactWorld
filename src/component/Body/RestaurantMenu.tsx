import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../../common/constants";

const RestaurantMenu = () => {
	const [restaurantData, setRestaurantData] = useState(null);

	const { resId } = useParams();

	useEffect(() => {
		fetchResData();
	}, []);

	const fetchResData = async () => {
		const data = await fetch(MENU_API + resId);
		const json = await data.json();
		setRestaurantData(json.data);
	};

	if (restaurantData === null) return <Shimmer />;
	const { name, cuisines, costForTwoMessage } =
		restaurantData?.cards[0]?.card?.card?.info;
	const { itemCards } =
		restaurantData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
			?.card;
	return (
		<div className='menu'>
			<h1>{name}</h1>
			<p>
				{cuisines.join(", ")} - {costForTwoMessage}
			</p>
			<h2>Menu</h2>
			<ul>
				{itemCards.map((i) => (
					<li key={i.card.info.id}>{i.card.info.name}</li>
				))}
			</ul>
		</div>
	);
};

export default RestaurantMenu;
