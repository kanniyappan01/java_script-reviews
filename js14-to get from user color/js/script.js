let userInput = document.querySelector(".Color-input");
let body = document.querySelector("body");
userInput.addEventListener("keyup",()=>{
	body.style.backgroundColor = userInput.value;
})