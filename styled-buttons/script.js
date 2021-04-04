const btns = document.querySelectorAll(".btn");
const submitIcon = document.querySelector(".check-icon");
const cancelIcon = document.querySelector(".cancel-icon");
const submitCircle = document.querySelector(".submit-circle");
const cancelCircle = document.querySelector(".cancel-circle");
const submitMessage = document.querySelector(".submit-message");
const cancelMessage = document.querySelector(".cancel-message");

const showResult = (icon, circle, message, display) => {
	icon.style.display = display;
	circle.style.display = display;
	message.style.display = display;
};

btns.forEach((btn) => {
	btn.addEventListener("click", () => {
		btn.style.display = "none";
		if (btn.classList.contains("submit-btn")) {
			showResult(submitIcon, submitCircle, submitMessage, "block");
			submitCircle.addEventListener("click", () => {
				btn.style.display = "block";
				showResult(submitIcon, submitCircle, submitMessage, "none");
			});
		} else {
			showResult(cancelIcon, cancelCircle, cancelMessage, "block");
			cancelCircle.addEventListener("click", () => {
				btn.style.display = "block";
				showResult(cancelIcon, cancelCircle, cancelMessage, "none");
			});
		}
	});
});
