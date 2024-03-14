import Item, { itemBestSeller } from "./Item";

const ItemList = ({ items }) => {
	console.log(items);
	const BestSeller = itemBestSeller(Item);
	return (
		<div>
			{items.map((i) =>
				i?.card?.info?.ribbon?.text === "Bestseller" ? (
					<BestSeller key={i?.card?.info?.id} itemdata={i} />
				) : (
					<Item itemdata={i} key={i?.card?.info?.id} />
				)
			)}
		</div>
	);
};

export default ItemList;
