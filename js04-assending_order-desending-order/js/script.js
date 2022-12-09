//Check whether a character is an alphabet, digit or special character


var userInput = prompt("enter your value");

if(userInput !== ''){
	if(userInput >= 0 || userInput <= 0 ){
		console.log("it's number");
	}else if(userInput >= "a" || userInput >= "A" ){
		console.log("it's alphabet");
	}
	else{
		console.log("it's special carector");
	}
}else{
	alert("You hsve to enter the value:")
}


//Write A Program To Accept Three Numbers From User And Print Them In Ascending And Descending Order

/*

var one = parseInt(prompt("numbe1"));
var two = parseInt(prompt("numbe2"));
var three = parseInt(prompt("numbe3"));

if(one > two && one > three){
	if(two > three){
		console.log(`assenting order: ${one} ${two} ${three}`);
		console.log(`decenting order: ${three} ${two} ${one}`);
	}else if(two<three){
		console.log(`assenting order: ${two} ${one} ${three}`);
		console.log(`decenting order: ${three} ${one} ${two}`);
	}
}else if(two > one && two > three){
	if(one>three){
		console.log(`assenting order: ${three} ${one} ${two}`);
		console.log(`decenting order: ${two} ${one} ${three}`);
	}else if(one<three){
		console.log(`assenting order: ${one} ${three} ${two}`);
		console.log(`decenting order: ${two} ${three} ${one}`);
	}
}else if(three > one && three>two){
	if(one > two){
		console.log(`assenting order: ${two} ${one} ${three}`);
		console.log(`decenting order: ${three} ${one} ${two}`);
	}else if(one < two){
		console.log(`assenting order: ${one} ${two} ${three}`);
		console.log(`decenting order: ${three} ${two} ${one}`);
	}
}

*/
//Find the number of days in a month

/* 
var month = parseInt(prompt("month"));
var year = parseInt(prompt("year"));

if(month !== '' && year !== ''){
	if(month == 4 || month == 6 || month == 9 || month == 11){
		console.log("30 days");
	}else if(month == 2){
		if((year % 4 == 0) && (year % 100 !== 0) || (year % 400 == 0)){
			console.log("this is leap year so '29 days'");
		}else{
			console.log("28 days");
		}
	}else if(month <= 12){
		console.log("31 days");
	}else{
		console.log("give valid month");
	}
}else{
	alert("put a value");
}

 */
/*  var number =parseInt(prompt());
 var result;
while(number > 1 ){
	number =number * 1;
	result = number;
	number++;
}
console.log(result); */

var number =parseInt(prompt());

for(let i=number; i>=0; i--){
	var result = number - 1;
	
}