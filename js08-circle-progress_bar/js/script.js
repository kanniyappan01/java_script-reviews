
let progressBar1 = document.querySelector("#circular-progress-1");
let valueContainer1 = document.querySelector("#value-container-1");
let progressBar2 = document.querySelector("#circular-progress-2");
let valueContainer2 = document.querySelector("#value-container-2");
let progressBar3 = document.querySelector("#circular-progress-3");
let valueContainer3 = document.querySelector("#value-container-3");
let progressBar4 = document.querySelector("#circular-progress-4");
let valueContainer4 = document.querySelector("#value-container-4");
let progressBar5 = document.querySelector("#circular-progress-5");
let valueContainer5 = document.querySelector("#value-container-5");
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let input3 = document.querySelector("#input3");
let input4 = document.querySelector("#input4");
let input5 = document.querySelector("#input5");

let progressValue1 = 0;
let progressValue2 = 0;
let progressValue3 = 0;
let progressValue4 = 0;
let progressValue5 = 0;

input1.addEventListener("blur",()=>{
	let progressEndValue = parseInt(input1.value,10);
	let progress = setInterval(function(){
	progressValue1++;
	
	valueContainer1.innerText =`${progressValue1}%`;
	progressBar1.style.background = `conic-gradient(#4d56f9 ${progressValue1 * 3.6}deg, #cadcff ${progressValue1 * 3.6}deg)`;
	console.log(progressEndValue)
		if(progressValue1 >= progressEndValue){
			clearInterval(progress);	
		}
	},20);
});

input2.addEventListener("blur",()=>{
	let progressEndValue = parseInt(input2.value,10);
	let progress = setInterval(function(){
	progressValue2++;
	
	valueContainer2.innerText =`${progressValue2}%`;
	progressBar2.style.background = `conic-gradient(#4d56f9 ${progressValue2 * 3.6}deg, #cadcff ${progressValue2 * 3.6}deg)`;
	console.log(progressEndValue)
		if(progressValue2 >= progressEndValue){
			clearInterval(progress);	
		}
	},20);
});

input3.addEventListener("blur",()=>{
	let progressEndValue = parseInt(input3.value,10);
	let progress = setInterval(function(){
	progressValue3++;
	
	valueContainer3.innerText =`${progressValue3}%`;
	progressBar3.style.background = `conic-gradient(#4d56f9 ${progressValue3 * 3.6}deg, #cadcff ${progressValue3 * 3.6}deg)`;
	console.log(progressEndValue)
		if(progressValue3 >= progressEndValue){
			clearInterval(progress);	
		}
	},20);
});

input4.addEventListener("blur",()=>{
	let progressEndValue = parseInt(input4.value,10);
	let progress = setInterval(function(){
	progressValue4++;
	
	valueContainer4.innerText =`${progressValue4}%`;
	progressBar4.style.background = `conic-gradient(#4d56f9 ${progressValue4 * 3.6}deg, #cadcff ${progressValue4 * 3.6}deg)`;
	console.log(progressEndValue)
		if(progressValue4 >= progressEndValue){
			clearInterval(progress);	
		}
	},20);
});

input5.addEventListener("blur",()=>{
	let progressEndValue = parseInt(input5.value,10);
	let progress = setInterval(function(){
	progressValue5++;
	
	valueContainer5.innerText =`${progressValue5}%`;
	progressBar5.style.background = `conic-gradient(#4d56f9 ${progressValue5 * 3.6}deg, #cadcff ${progressValue5 * 3.6}deg)`;
	console.log(progressEndValue)
		if(progressValue5 >= progressEndValue){
			clearInterval(progress);	
		}
	},20);
});

let numbers=["apple","cat","dog"];

numbers.forEach(function(val){
	console.log(val)
});