import React from "react";
import ReactDOM from "react-dom";

/**
 * Header
	- Logo
	- Nave Items
* Body
	- Search Box
	- Restaurant Container
		- Restaurant Card - Photo, Name, rating, Cusinine
* Footer
	- Copyright
	- Links
	- Address
	- Contact
 */
const Header = () => {
	return (
		<div className='header'>
			<div className='logo-container'>
				<img
					className='logo'
					src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png'
				/>
			</div>
			<div className='nav-items'>
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Contact Us</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	);
};

const styleCard = {
	backgroundColor: "#f0f0f0",
};

const restaurantsData = [
	{
		name: "Meghana Foods",
		logo: "https://b.zmtcdn.com/data/dish_photos/496/7b4722c3a86cf719f46309968cbe9496.jpg?",
		rating: "4.4",
		cuisine: "Biryani, North Indian, Asian",
		delivery: "38",
	},
	{
		name: "KFC",
		logo: "https://content3.jdmagicbox.com/comp/bangalore/p9/080pxx80.xx80.220630225917.d2p9/catalogue/kfc-gottigere-bangalore-restaurants-itegmm3gp0.jpg?clr=",
		rating: "4.1",
		cuisine: "Burgers, Asian",
		cuisine: "20",
	},
];

const resObj = {
	info: {
		id: "375981",
		name: "Beijing Bites",
		cloudinaryImageId: "mt3khiam8popwc1lcjud",
		locality: "Millennium City",
		areaName: "Pahala",
		costForTwo: "₹400 for two",
		cuisines: ["Chinese", "Malaysian", "Thai"],
		avgRating: 4.4,
		parentId: "103",
		avgRatingString: "4.4",
		totalRatingsString: "100+",
		sla: {
			deliveryTime: 37,
			lastMileTravel: 8.9,
			serviceability: "SERVICEABLE",
			slaString: "37 mins",
			lastMileTravelString: "8.9 km",
			iconType: "ICON_TYPE_EMPTY",
		},
		availability: {
			nextCloseTime: "2024-03-10 22:30:00",
			opened: true,
		},
		badges: {},
		isOpen: true,
		type: "F",
		badgesV2: {
			entityBadges: {
				imageBased: {},
				textBased: {},
				textExtendedBadges: {},
			},
		},
		aggregatedDiscountInfoV3: {
			header: "30% OFF",
			subHeader: "UPTO ₹75",
		},
		orderabilityCommunication: {
			title: {},
			subTitle: {},
			message: {},
			customIcon: {},
		},
		differentiatedUi: {
			displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
			differentiatedUiMediaDetails: {
				mediaType: "ADS_MEDIA_ENUM_IMAGE",
				lottie: {},
				video: {},
			},
		},
		reviewsSummary: {},
		displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
		restaurantOfferPresentationInfo: {},
	},
	analytics: {
		context: "seo-data-b461b313-d52a-45fd-8ce0-0ed2c0d16645",
	},
	cta: {
		link: "https://www.swiggy.com/restaurants/beijing-bites-millennium-city-pahala-bhubaneswar-375981",
		text: "RESTAURANT_MENU",
		type: "WEBLINK",
	},
	widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
};

const resList = [
	{
		info: {
			id: "375981",
			name: "Beijing Bites",
			cloudinaryImageId: "mt3khiam8popwc1lcjud",
			locality: "Millennium City",
			areaName: "Pahala",
			costForTwo: "₹400 for two",
			cuisines: ["Chinese", "Malaysian", "Thai"],
			avgRating: 4.4,
			parentId: "103",
			avgRatingString: "4.4",
			totalRatingsString: "100+",
			sla: {
				deliveryTime: 37,
				lastMileTravel: 8.9,
				serviceability: "SERVICEABLE",
				slaString: "37 mins",
				lastMileTravelString: "8.9 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-03-10 22:30:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "30% OFF",
				subHeader: "UPTO ₹75",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-b461b313-d52a-45fd-8ce0-0ed2c0d16645",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/beijing-bites-millennium-city-pahala-bhubaneswar-375981",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "571533",
			name: "Monginis",
			cloudinaryImageId: "xdsdw6tdowpeqbcqhsxa",
			locality: "Shahid Nagar",
			areaName: "Rasulgarh",
			costForTwo: "₹500 for two",
			cuisines: ["Bakery", "Snacks", "Desserts"],
			avgRating: 4.1,
			parentId: "5007",
			avgRatingString: "4.1",
			totalRatingsString: "100+",
			sla: {
				deliveryTime: 21,
				lastMileTravel: 4.1,
				serviceability: "SERVICEABLE",
				slaString: "21 mins",
				lastMileTravelString: "4.1 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-03-10 23:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-b461b313-d52a-45fd-8ce0-0ed2c0d16645",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/monginis-shahid-nagar-rasulgarh-bhubaneswar-571533",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "464437",
			name: "Grameen Kulfi",
			cloudinaryImageId: "z5urdaskdvxchnauzuby",
			locality: "Lewis Road",
			areaName: "Nageswar Tangi",
			costForTwo: "₹120 for two",
			cuisines: ["Ice Cream", "Desserts"],
			avgRating: 4.7,
			veg: true,
			parentId: "12175",
			avgRatingString: "4.7",
			totalRatingsString: "500+",
			sla: {
				deliveryTime: 30,
				lastMileTravel: 7.6,
				serviceability: "SERVICEABLE",
				slaString: "30 mins",
				lastMileTravelString: "7.6 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-03-11 00:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "EVERY ITEM",
				subHeader: "@ ₹99",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-b461b313-d52a-45fd-8ce0-0ed2c0d16645",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/grameen-kulfi-lewis-road-nageswar-tangi-bhubaneswar-464437",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "305735",
			name: "Hotel Sai Swad",
			cloudinaryImageId: "xlbrb4zucqmeol22s5ix",
			locality: "GGP Colony",
			areaName: "Rasulgarh",
			costForTwo: "₹300 for two",
			cuisines: ["Indian"],
			avgRating: 4.2,
			parentId: "101842",
			avgRatingString: "4.2",
			totalRatingsString: "5K+",
			sla: {
				deliveryTime: 33,
				lastMileTravel: 4,
				serviceability: "SERVICEABLE",
				slaString: "33 mins",
				lastMileTravelString: "4.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-03-10 23:30:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			aggregatedDiscountInfoV2: {},
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-b461b313-d52a-45fd-8ce0-0ed2c0d16645",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/hotel-sai-swad-ggp-colony-rasulgarh-bhubaneswar-305735",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "617338",
			name: "Bhaina Hotel and Fast Food",
			cloudinaryImageId: "yzmjva88szgmjezyztyo",
			locality: "Rajmahal Square",
			areaName: "Ashok Nagar",
			costForTwo: "₹240 for two",
			cuisines: ["Chinese", "Snacks"],
			avgRating: 4,
			parentId: "9838",
			avgRatingString: "4.0",
			totalRatingsString: "100+",
			sla: {
				deliveryTime: 32,
				lastMileTravel: 6.7,
				serviceability: "SERVICEABLE",
				slaString: "32 mins",
				lastMileTravelString: "6.7 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-03-10 23:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "10% OFF",
				subHeader: "ABOVE ₹1000",
				discountTag: "FLAT DEAL",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-b461b313-d52a-45fd-8ce0-0ed2c0d16645",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/bhaina-hotel-and-fast-food-rajmahal-square-ashok-nagar-bhubaneswar-617338",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "111281",
			name: "Baskin Robbins - Ice Cream Desserts",
			cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
			locality: "Chindimata Colony",
			areaName: "Rasulgarh",
			costForTwo: "₹200 for two",
			cuisines: ["Desserts", "Ice Cream"],
			avgRating: 4.6,
			veg: true,
			parentId: "5588",
			avgRatingString: "4.6",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 29,
				lastMileTravel: 5,
				serviceability: "SERVICEABLE",
				slaString: "29 mins",
				lastMileTravelString: "5.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-03-10 23:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "30% OFF",
				subHeader: "UPTO ₹75",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-b461b313-d52a-45fd-8ce0-0ed2c0d16645",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-chindimata-colony-rasulgarh-bhubaneswar-111281",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "384024",
			name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
			cloudinaryImageId: "l3muzpxy1ivhufrkv8zb",
			locality: "Badagada Village",
			areaName: "Pandav Nagar",
			costForTwo: "₹300 for two",
			cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
			avgRating: 4.7,
			veg: true,
			parentId: "582",
			avgRatingString: "4.7",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 27,
				lastMileTravel: 5.5,
				serviceability: "SERVICEABLE",
				slaString: "27 mins",
				lastMileTravelString: "5.5 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-03-11 00:30:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "50% OFF",
				subHeader: "UPTO ₹100",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-b461b313-d52a-45fd-8ce0-0ed2c0d16645",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-badagada-village-pandav-nagar-bhubaneswar-384024",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "464436",
			name: "NIC Ice Creams",
			cloudinaryImageId: "85825a6d74b1059a63a9b688de9f67ce",
			locality: "Old Town",
			areaName: "Bjb Nagar",
			costForTwo: "₹120 for two",
			cuisines: ["Ice Cream", "Desserts"],
			avgRating: 4.7,
			veg: true,
			parentId: "6249",
			avgRatingString: "4.7",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 30,
				lastMileTravel: 7.6,
				serviceability: "SERVICEABLE",
				slaString: "30 mins",
				lastMileTravelString: "7.6 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-03-11 00:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "60% OFF",
				subHeader: "UPTO ₹120",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-b461b313-d52a-45fd-8ce0-0ed2c0d16645",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/nic-ice-creams-old-town-bjb-nagar-bhubaneswar-464436",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
	{
		info: {
			id: "89706",
			name: "Wow! Momo",
			cloudinaryImageId: "64fd45fd9f44c1737bc446e470bed666",
			locality: "Hb Colony",
			areaName: "Kharabela Nagar",
			costForTwo: "₹300 for two",
			cuisines: [
				"Tibetan",
				"Healthy Food",
				"Asian",
				"Chinese",
				"Snacks",
				"Continental",
				"Desserts",
				"Beverages",
			],
			avgRating: 4.5,
			parentId: "1776",
			avgRatingString: "4.5",
			totalRatingsString: "1K+",
			sla: {
				deliveryTime: 33,
				lastMileTravel: 5,
				serviceability: "SERVICEABLE",
				slaString: "33 mins",
				lastMileTravelString: "5.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
			availability: {
				nextCloseTime: "2024-03-10 23:00:00",
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: "F",
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: "60% OFF",
				subHeader: "UPTO ₹120",
			},
			orderabilityCommunication: {
				title: {},
				subTitle: {},
				message: {},
				customIcon: {},
			},
			differentiatedUi: {
				displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
				differentiatedUiMediaDetails: {
					mediaType: "ADS_MEDIA_ENUM_IMAGE",
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
			restaurantOfferPresentationInfo: {},
		},
		analytics: {
			context: "seo-data-b461b313-d52a-45fd-8ce0-0ed2c0d16645",
		},
		cta: {
			link: "https://www.swiggy.com/restaurants/wow-momo-hb-colony-kharabela-nagar-bhubaneswar-89706",
			text: "RESTAURANT_MENU",
			type: "WEBLINK",
		},
		widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
	},
];

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
				src={
					"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
					cloudinaryImageId
				}
			></img>
			<h3>{name}</h3>
			<h4>{cuisines.join(", ")}</h4>
			<h4>{avgRating} stars</h4>
			<h4>{costForTwo}</h4>
			<h4>{deliveryTime} minutes</h4>
		</div>
	);
};

const Body = () => {
	return (
		<div className='body'>
			<div className='search'></div>
			<div className='res-container'>
				{resList.map((i) => (
					<RestaurantCard key={i.info.id} resData={i} />
				))}
			</div>
		</div>
	);
};

const AppLayoutComponent = () => {
	return (
		<div className='app'>
			<Header></Header>
			<Body></Body>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComponent />);
