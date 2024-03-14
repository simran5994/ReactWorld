import { useDispatch } from "react-redux";
import { addItem } from "../../utils/store/cartSlice";
import { ITEM_API } from "../../common/constants";
const Item = ({ itemdata }) => {
	const dispatch = useDispatch();

	const handleAdd = (itemD) => {
		dispatch(addItem(itemD));
	};
	return (
		<div className='flex justify-between mx-auto py-4 border-b-2 mx-4'>
			<div className='float-left flex flex-wrap'>
				<h3 className='font-bold'>{itemdata?.card?.info?.name}</h3>
				<h3 className='font-bold'>
					{"  "}₹
					{itemdata?.card?.info?.price
						? itemdata?.card?.info?.price / 100
						: itemdata?.card?.info?.defaultPrice / 100}
				</h3>
				<p className='text-xs'>{itemdata?.card?.info?.description}</p>
			</div>
			<div className='flex flex-col'>
				<button
					className='p-2 mx-16 rounded-lg border-b-2 text-white shadow-lg bg-black'
					onClick={() => handleAdd(itemdata)}
				>
					⁺
				</button>
				<img
					className='w-2- h-20'
					src={ITEM_API + itemdata?.card?.info?.imageId}
				></img>
			</div>
		</div>
	);
};

export const itemBestSeller = (Item) => {
	return (props) => {
		return (
			<div itemdata={props}>
				<span>Bestseller</span>
				<Item />
			</div>
		);
	};
};
export default Item;
