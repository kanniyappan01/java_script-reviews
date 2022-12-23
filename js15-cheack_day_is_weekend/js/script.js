let userInput = document.querySelector(".input");
let ouput=document.querySelector(".ouput");
userInput.addEventListener("change",()=>{
	let user=userInput.value;
	let date = new Date(user);
	let day=date.getDay();
	checkDate(day)
});
var weekDays=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
function checkDate(day){
	if(day==6||day==0){
		ouput.innerText=`${weekDays[day]} it's a weekend`;
	}else{
		ouput.innerText=`${weekDays[day]} it's a workday`;
	}
}