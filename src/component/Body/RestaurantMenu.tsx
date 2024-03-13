import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
	const { resId } = useParams();
	const restaurantData = useRestaurantMenu(resId); // custom Hook 

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
