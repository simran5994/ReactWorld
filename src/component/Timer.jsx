import { useEffect, useState } from "react";

const Timer = () => {
	const countDownDate = new Date("March 18, 2024 23:00:00").getTime();
	const [hour, setHour] = useState("");
	const [min, setMin] = useState("");
	const [sec, setSec] = useState("");
	const [day, setDay] = useState("");
	const [expire, setExpire] = useState(null);

	const startTimer = () => {
		setInterval(() => {
			var now = new Date().getTime();

			var distance = countDownDate - now;

			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			var hours = Math.floor(
				(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			setExpire(null);
			setHour(hours);
			setMin(minutes);
			setSec(seconds);
			setDay(days);
			if (distance < 0) {
				clearInterval(x);
				setExpire = "EXPIRED";
			}
		}, 1000);
	};

	useEffect(() => {
		startTimer();
	}, []);
	return (
		<div>
			{expire == null ? (
				<h2>
					{day} d {hour} h {min} m {sec} s
				</h2>
			) : (
				<h2>{expire}</h2>
			)}
		</div>
	);
};

export default Timer;
