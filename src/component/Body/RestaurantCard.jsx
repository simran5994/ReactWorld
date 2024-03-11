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
		<div className='res-card' style={styleCard}>
			<img
				className='res-logo'
				alt='res-img'
				src={CDN_URL + cloudinaryImageId}
			></img>
			<h3>{name}</h3>
			<h4>{cuisines.join(", ")}</h4>
			<h4>{avgRating} stars</h4>
			<h4>{costForTwo}</h4>
			<h4>{deliveryTime} minutes</h4>
		</div>
	);
};

export default RestaurantCard;
