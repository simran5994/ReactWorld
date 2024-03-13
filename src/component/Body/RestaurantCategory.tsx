import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = (props) => {
	const { data, showItems, setShowIndex } = props;

	return (
		<div className='bg-gray-100 w-8/12 justify-between mx-auto my-4'>
			{/* {Header} */}
			<div
				className='bg-gray-100 shadow-lg p-4 flex justify-between cursor-pointer'
				onClick={setShowIndex}
			>
				<span className='font-bold text-lg'>
					{data.title}({data.itemCards.length})
				</span>
				<span>{showItems ? "↑" : "↓"}</span>
			</div>
			{showItems && <ItemList items={data.itemCards} />}
		</div>
	);
};

export default RestaurantCategory;
