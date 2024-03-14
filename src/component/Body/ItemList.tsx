import Item, { itemBestSeller } from "./Item";

const ItemList = ({ items }) => {
	console.log(items);
	const BestSeller = itemBestSeller(Item);
	return (
		<div>
			<ul>
				{items.map((i) =>
					i?.card?.info?.ribbon?.text === "Bestseller" ? (
						<BestSeller itemdata={i} />
					) : (
						<Item itemdata={i} />
					)
				)}
			</ul>
		</div>
	);
};

export default ItemList;
