// const eyesInput = document.querySelector("#eyes-input");
// const bodyInput = document.querySelector("#body-input");
// const earsLegsInput = document.querySelector("#ears-and-legs-input");
const colorInputs = document.querySelectorAll("input");
const root = document.querySelector(":root");

colorInputs.forEach((colorInput) => {
	colorInput.addEventListener("change", (e) => {
		const newColor = e.target.value;
		if (colorInput.id === "eyes-input") {
			root.style.setProperty("--eyes-color", newColor);
		} else if (colorInput.id === "body-input") {
			root.style.setProperty("--primary-color", newColor);
		} else if (colorInput.id === "ears-and-legs-input") {
			root.style.setProperty("--secondary-color", newColor);
		}
	});
});

//surprise btn

// const setColor = (e) => {
// 	const newColor = e.target.value;
// 	root.style.setProperty("--primary-color", newColor);
// };

// bodyInput.addEventListener("change", setColor);

// const updatePairElementsColor = (selector, color) => {
// 	const pairElements = document.querySelectorAll(selector);
// 	pairElements.forEach((element) => {
// 		element.style.backgroundColor = color;
// 	});
// };

// const updateEyesColor = (e) => {
// 	const newColor = e.target.value;
// 	console.log(newColor);
// 	updatePairElementsColor(".eye-ball", newColor);
// };

// eyesInput.addEventListener("change", updateEyesColor);
// bodyInput.addEventListener("change", updateBodyColor);
