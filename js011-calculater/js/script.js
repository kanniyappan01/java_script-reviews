/*let value1 = parseInt(prompt("first value"));
let value2 = parseInt(prompt("second value"));
let operator = prompt("operator");

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

*/
/*
let value=5;
let value1=value;
value = 10;
console.log("value "+value)
console.log("value1 "+value1)

*/
let obj = {
	name:"kani",
	age:20
}

/*
let arr =[1,2,3]
let arr1 = [...arr];
arr[1]=5;
console.log(arr)
console.log(arr1)

*/
/*
obj1 = Object.assign({},obj);

obj1.age = 25;
console.log(obj)
console.log(obj1)

*/

let obj1 = JSON.parse(JSON.stringify(obj));
obj.age = 22;
console.log(obj)
console.log(obj1)
