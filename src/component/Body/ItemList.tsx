import Item from "./Item";

const ItemList = ({ items }) => {
	console.log(items);
	return (
		<div>
			<ul>
				{items.map((i) => (
					// <li key={i.card.info.id}>{i.card.info.name}</li>
					<Item itemdata={i} />
				))}
			</ul>
		</div>
	);
};

export default ItemList;
