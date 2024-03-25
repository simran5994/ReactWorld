import { useState, useEffect } from "react";

const ToDoList = () => {
	const l = ["Shopping", "Playing", "Reading", "Singing"];
	const [myList, setMyList] = useState(l);
	const [showDelete, setShowDelete] = useState(false);

	useEffect(() => {
		setMyList(l);
	}, []);

	const updatedCheckbox = (value) => {
		console.log(value);
		value ? setShowDelete(true) : setShowDelete(false);
	};

	const removeFromList = (item) => {
		let updated = myList.filter((i) => i !== item);
		setMyList(updated);
	};

	return (
		<div>
			<h2> My Todo List</h2>
			<div>
				<ul>
					{myList.map((i, index) => (
						<li className='row' key={index}>
							<input
								type='checkbox'
								className='float-left m-4 p-4'
								onChange={(e) => updatedCheckbox(e.target.checked)}
							></input>
							<label className='my-4 font-bold text-center'>{i}</label>
							{showDelete && (
								<button
									className='p-2 m-2 rounded-lg'
									onClick={() => removeFromList(i)}
								>
									❌
								</button>
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ToDoList;
