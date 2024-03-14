import { ITEM_API } from "../../common/constants";
const Item = ({ itemdata }) => {
	console.log(itemdata);
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
				<img
					className='w-20 h-20'
					src={ITEM_API + itemdata?.card?.info?.imageId}
				></img>
				<button className='border-b-2 font-green bg-white w-3 h-6'>
					Add ⁺
				</button>
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
