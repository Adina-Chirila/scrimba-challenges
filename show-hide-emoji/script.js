const cards = document.querySelectorAll(".card");

const flipCard = (e) => {
	const parent = e.target.parentElement;
	console.log(parent);
	parent.classList.toggle("is-flipped");
};

cards.forEach((card) => {
	card.addEventListener("click", flipCard);
});

// const flipCard = (e) => {
// 	card.classList.toggle("is-flipped");
// 	console.log(e.target);
// };

// const card = document.querySelector(".card");
// card.addEventListener("click", flipCard);

// const hideAll = () => {
// 	cards.forEach((card) => {
// 		card.classList.add("is-flipped");
// 	});
// };

// setTimeout(hideAll, 3000);
