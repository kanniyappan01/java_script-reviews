/*var num = parseInt(prompt("enter a number"));
var reverse = 0;

let arr = ["zero","one","two","three","four","five","six","seven","eight","nine"];
let ans = '';
while(num != 0){
	var lastDigit = num % 10;
	reverse += lastDigit;
	num = parseInt(num/10);
	ans = arr[lastDigit];
	console.log(ans);
}

*/

let value1 = parseInt(prompt("first value"));
let value2 = parseInt(prompt("second value"));
let operator = prompt("operator")

function call(){
	if(operator=="+"||operator=="-"||operator=="*"||operator=="/"||operator=="%"){
		if(operator == "+" ) return value1+value2;
		if(operator=="-" ) return value1-value2;
		if(operator=="*") return value1*value2;
		if(operator=="%") return value1%value2;
		if(operator=="/") return value1/value2;
	}else{
		alert("it's not a valid operator")
	}
}
console.log(call());