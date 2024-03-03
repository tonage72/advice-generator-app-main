const adviceNumber = document.querySelector(".advice-number");
const adviceText = document.querySelector(".advice-text");
const diceButton = document.querySelector(".dice-button");

diceButton.addEventListener("click", getAdvice);

function getAdvice() {
	fetch("https://api.adviceslip.com/advice")
	  .then(res => res.json())
	  .then(res => {
		adviceText.innerHTML = "\"" + res.slip.advice + "\"";
		adviceNumber.innerHTML = res.slip.id;
	  })
	  .catch(err => console.error(err));
}

getAdvice();