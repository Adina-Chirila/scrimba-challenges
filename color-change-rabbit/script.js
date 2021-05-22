const colorInputs = document.querySelectorAll("input");
const root = document.querySelector(":root");
const surpriseBtn = document.querySelector("#surprise-btn");

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

const generateRandomColors = () => {
	const randomColorsArr = [];
	for (let i = 0; i < 3; i++) {
		const randomColor = `#${Math.floor(Math.random() * 16777216).toString(16)}`;
		randomColorsArr.push(randomColor);
	}
	root.style.setProperty("--eyes-color", randomColorsArr[0]);
	root.style.setProperty("--primary-color", randomColorsArr[1]);
	root.style.setProperty("--secondary-color", randomColorsArr[2]);

	console.log(randomColorsArr);
};

surpriseBtn.addEventListener("click", generateRandomColors);
