import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../utils/store/cartSlice";
import { ITEM_API } from "../../common/constants";
import { useState } from "react";
const Item = ({ itemdata, comingFromCart }) => {
	const dispatch = useDispatch();

	const [stateAdd, setStateAdd] = useState("⁺");

	const handleAdd = (itemD) => {
		if (stateAdd === "⁺") {
			setStateAdd("⁻");
			dispatch(addItem(itemD));
		} else {
			setStateAdd("⁺");
			dispatch(removeItem());
		}
	};
	return (
		<div className='flex justify-between py-4 border-b-2 mx-4'>
			<div className='flex flex-col'>
				<h3 className='font-bold text-left'>{itemdata?.card?.info?.name}</h3>
				<h3 className='font-bold text-left'>
					{"  "}₹
					{itemdata?.card?.info?.price
						? itemdata?.card?.info?.price / 100
						: itemdata?.card?.info?.defaultPrice / 100}
				</h3>
				<p className='text-xs text-left'>{itemdata?.card?.info?.description}</p>
			</div>
			<div className='flex flex-col mx-16'>
				{!comingFromCart && (
					<button
						className='p-2 rounded-lg border-b-2 text-white shadow-lg bg-green-500 w-20  float-right'
						onClick={() => handleAdd(itemdata)}
					>
						Add {stateAdd}
					</button>
				)}
				<img
					className='w-20 h-20  float-right'
					src={ITEM_API + itemdata?.card?.info?.imageId}
				></img>
			</div>
		</div>
	);
};

export const itemBestSeller = (Item) => {
	return (props) => {
		return (
			<div className='flex flex-col'>
				<h3 className='float-left m-4 font-bold rounded-lg border-b-2 text-white bg-green-500 w-1/12'>
					Bestseller
				</h3>
				<Item {...props} />
			</div>
		);
	};
};
export default Item;
