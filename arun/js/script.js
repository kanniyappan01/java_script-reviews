let bodyEle = document.querySelector("body");
let btnEle = document.querySelector(".color-change");

btnEle.addEventListener("click",function(){
	let color01 = Math.round(Math.random() * (255 - 1));
	let color02 = Math.round(Math.random() * (255 - 1));
	let color03 = Math.round(Math.random() * (255 - 1));
	bodyEle.style.backgroundColor = `rgb(${color01}, ${color02}, ${color03})`;
});