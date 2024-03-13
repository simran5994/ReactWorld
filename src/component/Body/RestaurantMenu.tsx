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
		<div className='m-4 p-4 w-[200px]'>
			<h1 className="font-bold font-size-2xl">{name}</h1>
			<p className="font-bold p-2">
				{cuisines.join(", ")} - {costForTwoMessage}
			</p>
			<h2 className="font-bold p-2">Menu</h2>
			<ul className="p-4 list-disc">
				{itemCards.map((i) => (
					<li className="py-4" key={i.card.info.id}>{i.card.info.name}</li>
				))}
			</ul>
		</div>
	);
};

export default RestaurantMenu;
