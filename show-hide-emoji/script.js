const cardsDiv = document.querySelector(".cards");
const showBtn = document.querySelector(".show-btn");
const hideBtn = document.querySelector(".hide-btn");
const surpriseBtn = document.querySelector(".change-emojis");
const container = document.querySelector(".container");

const emojis = [
	"🐕",
	"🐈",
	"🐎",
	"🐄",
	"🦙",
	"🦨",
	"🐓",
	"🦚",
	"🍇",
	"🍒",
	"🌶️",
	"🥚",
	"🧁",
	"🍺",
	"🐠",
	"🐞",
	"🏝️",
	"✈️",
	"⛱️",
	"💌",
	"🔥",
	"🌧️",
	"🐇",
	"🦋",
	"🌈",
	"🦄",
	"🍭",
	"🌻",
];

const generateRandomEmojis = () => {
	const newEmojis = [];
	for (let i = 0; i < 8; i++) {
		const index = Math.floor(Math.random() * emojis.length);
		newEmojis.push(emojis[index]);
	}
	return newEmojis;
};

const updateCards = () => {
	cardsDiv.innerHTML = "";
	const emojis = generateRandomEmojis();
	emojis.forEach((emoji) => {
		const card = document.createElement("div");
		card.addEventListener("click", flipCard);
		card.className = "card";

		card.innerHTML = `
		<div class="card-face card-front">
			<span>${emoji}</span>
		</div>
		<div class="card-face card-back"></div>
	`;
		cardsDiv.append(card);
	});
};

const flipCard = (e) => {
	const parent = e.target.parentElement;
	parent.classList.toggle("is-flipped");
};

const handleSurprise = (visibility) => {
	if (visibility === "show") {
		container.classList.add("surprise");
	} else {
		container.classList.remove("surprise");
	}
};

const showAllCards = () => {
	const cards = document.querySelectorAll(".card");

	cards.forEach((card) => {
		card.classList.remove("is-flipped");
	});
	handleSurprise("hide");
};

const hideAllCards = () => {
	const cards = document.querySelectorAll(".card");
	cards.forEach((card) => {
		card.classList.add("is-flipped");
	});
	handleSurprise("hide");
};

showBtn.addEventListener("click", showAllCards);
hideBtn.addEventListener("click", hideAllCards);
surpriseBtn.addEventListener("click", () => {
	updateCards();
	handleSurprise("show");
});

window.addEventListener("DOMContentLoaded", updateCards);
