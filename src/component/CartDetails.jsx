import { useDispatch, useSelector, useDispatch } from "react-redux";
import Item from "./Body/Item";
import { ITEM_API } from "../common/constants";
import { useState, useEffect } from "react";
import { clearCart } from "../utils/store/cartSlice";

const CartDetails = () => {
	const dispatch = useDispatch();

	// make sure to subscribe to the right portion of the store to improve performance
	const cart = useSelector((store) => store.cart.items);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		let s = 0;
		if (cart?.length > 0) {
			cart?.forEach((e) => {
				s += e?.card?.info?.price
					? e?.card?.info?.price / 100
					: e?.card?.info?.defaultPrice / 100;
				setTotal(s);
			});
		}
	}, [cart]);

	const handleClearCart = () => {
		dispatch(clearCart());
	};
	return (
		<div className='text-center m-4 p-4'>
			<h1 className='text-2xl font-bold py-4'>Cart</h1>
			<div className='w-6/12 m-auto'>
				{cart.length > 0 && (
					<button
						className='border p-2 m-2 rounded-lg border-b-2 bg-black text-white'
						onClick={() => handleClearCart()}
					>
						Clear Cart
					</button>
				)}

				{cart.map((itemdata) => (
					<Item
						key={itemdata.card.info.id}
						itemdata={itemdata}
						comingFromCart={true}
					/>
				))}
			</div>

			{cart.length > 0 ? (
				<div className='font-bold py-4 w-6/12 flex justify-between m-auto px-4'>
					<h3>Total</h3>
					<p>{total}</p>
				</div>
			) : (
				<h3>Cart is Empty</h3>
			)}
		</div>
	);
};

export default CartDetails;
