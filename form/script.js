const nameInput = document.querySelector(".name");
const container = document.querySelector(".container");
const form = document.querySelector("form");
const successBox = document.querySelector(".success-box");
const accountNameSpan = document.querySelector(".account-name span");

const handleSuccessMessage = (e) => {
	e.preventDefault();

	const nameValue = nameInput.value;
	accountNameSpan.innerText = nameValue.toUpperCase();

	form.classList.toggle("hidden");
	successBox.classList.toggle("visible");
};

form.addEventListener("submit", handleSuccessMessage);
