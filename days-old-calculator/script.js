const calculateBtn = document.querySelector(".calculate-btn");
const result = document.querySelector(".result");
const dateWrapper = document.querySelector(".date-wrapper");
const dateInput = document.querySelector("#date-input");
const daysOldSpan = document.querySelector(".days-old");
const backBtn = document.querySelector(".back-btn");

// const calculate = () => {
// 	clock.classList.add("visible");
// 	container.classList.add("hidden");
// 	setTimeout(() => {
// 		body.classList.add("birthday");
// 		clock.classList.remove("visible");
// 	}, 3000);
// 	// setInterval(() => {
// 	// 	body.classList.add("birthday");
// 	// 	// birthday.classList.add("visible");
// 	// }, 1500);
// };

const formatLessThen10 = (number) => {
	return number < 10 ? (number = `0${number}`) : number;
};

const updateMinMaxDate = () => {
	const today = new Date();
	const currentYear = today.getFullYear();
	const currentMonth = formatLessThen10(today.getMonth() + 1);
	const currentDay = formatLessThen10(today.getDate());

	const maxDate = `${currentYear}-${currentMonth}-${currentDay}`;
	dateInput.setAttribute("max", maxDate);
};

const calculateDaysOld = () => {
	const today = new Date();
	const dateOfBirth = new Date(dateInput.value);
	if (dateOfBirth > today) {
		const message = document.querySelector(".result h1");
		message.innerText = `You cannot be born in the future... just for the moment :)`;
		return;
	}
	const diff = today - dateOfBirth;
	const daysOld = Math.floor(diff / (1000 * 3600 * 24));

	daysOldSpan.innerText = daysOld < 2 ? `${daysOld} day` : `${daysOld} days`;
};

const showResult = () => {
	if (!dateInput.value) {
		return;
	}

	calculateDaysOld();
	result.style.display = "flex";
	dateWrapper.style.display = "none";
};

const hideResult = () => {
	dateInput.value = "";
	result.style.display = "none";
	dateWrapper.style.display = "flex";
};

document.addEventListener("DOMContentLoaded", updateMinMaxDate);
calculateBtn.addEventListener("click", showResult);
backBtn.addEventListener("click", hideResult);
