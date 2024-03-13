import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
	const { resId } = useParams();
	const restaurantData = useRestaurantMenu(resId); // custom Hook
	const [showItems, setShowItems] = useState(false);
	const [showIndex, setShowIndex] = useState(0);
	if (restaurantData === null) return <Shimmer />;
	const { name, cuisines, costForTwoMessage } =
		restaurantData?.cards[0]?.card?.card?.info;
	const { itemCards } =
		restaurantData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
			?.card;
	const categories =
		restaurantData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
			(i) =>
				i?.card?.card?.["@type"] ===
				"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
		);
	console.log(categories);
	const handleClick = () => {
		setShowItems(!showItems);
	};
	return (
		<div className='text-center'>
			<h1 className='font-bold font-size-2xl my-6'>{name}</h1>
			<p className='font-bold p-2 text-lg'>
				{cuisines.join(", ")} - {costForTwoMessage}
			</p>
			{/* <h2 className='font-bold p-2'>Menu</h2>
			<ul className='p-4 list-disc'>
				{itemCards.map((i) => (
					<li className='py-4' key={i.card.info.id}>
						{i.card.info.name}
					</li>
				))}
			</ul> */}
			{categories.map((c, index) => (
				//controlled component
				<RestaurantCategory
					key={c.card.card.title}
					data={c?.card?.card}
					showItems={index === showIndex && true}
					setShowIndex={() => setShowIndex(index)}
				/>
			))}
		</div>
	);
};

export default RestaurantMenu;
