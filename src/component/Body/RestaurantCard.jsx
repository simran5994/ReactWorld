import React from "react";
import { CDN_URL } from "../../common/constants";

const styleCard = {
	backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
	const { resData } = props;
	const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
		resData.info;
	const { deliveryTime } = resData.info.sla;
	return (
		<div className='res-card p-4 m-4 w-[200px] h-[500px] bg-gray-100 rounded-lg hover:bg-gray-200'>
			<img
				className='res-logo rounded-2xl'
				alt='res-img'
				src={CDN_URL + cloudinaryImageId}
			></img>
			<h3 className='font-bold py-2 text-lg'>{name}</h3>
			<h4 className='py-2 font-bold'>{cuisines.join(", ")}</h4>
			<h4 className='py-2 font-bold'>{avgRating} stars</h4>
			<h4 className='font-bold'>{costForTwo}</h4>
			<h4 className='font-bold'>{deliveryTime} minutes</h4>
		</div>
	);
};

//Higher order component - takes input as restaurant card and returns new component promoted restaurant card

export const withPromotedLabel = (RestaurantCard) => {
	return (props) => {
		// enhanced version of restaurant card
		return (
			<div>
				<label>Open</label>
				<RestaurantCard {...props} />
			</div>
		);
	};
};

export default RestaurantCard;
