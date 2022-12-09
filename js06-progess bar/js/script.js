const progress = document.querySelector(".progress-bar");
const input = document.querySelector(".input");
const maxInput = document.querySelector(".max-input");

let finalValue = 0;
let max = 0;

input.addEventListener("keyup", function(){
	finalValue = parseInt(input.value, 10);
	changeWidth()
})
maxInput.addEventListener("keyup", function(){
	max = parseInt(maxInput.value, 10);
	changeWidth()
})
// change the with of progress bar
function changeWidth(){
	progress.style.width = `${(finalValue / max) * 100}%`;
	progress.innerText = `${parseInt((finalValue / max) * 100)}%`;
}
