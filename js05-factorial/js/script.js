/* var number = 10;

for(let i=1; i <= number; number--){
	var result = number *= i;
	console.log(number);
}

 */
/* 
var userInput = parseInt(prompt());
for(i=1;i<userInput;userInput--){
	var reult=userInput-1;
	console.log(reult);
}
*/

/*
var num =parseInt(prompt());
var fact = 1;
for(i=num;i>=1;i--){
	fact=fact*i;
}
console.log(fact);
*/

// var user =parseInt(prompt());


/* 
if(num % 2 == 0){
	while(num != 0){
		
		var lastDigit = num % 10;
		order += lastDigit;
		num = parseInt(num/10);
		
	}
	console.log(`this is even number : ${order}`);
}else if(num % 2 == 1){
	while(num != 0){
		var lastDigit = num % 10;
		order += lastDigit;
		num = parseInt(num/10);
		
	}
	console.log(`this is odd number : ${order}`);
}
 */
 /*
var num = parseInt(prompt("enter a number"));
var order1 = 0;
var order2 = 0;

	while(num != 0){
		if(num%2==0){
			var lastDigit = num % 10;
			order1 += lastDigit;
			num = parseInt(num/10);
		}else if(num%2 !==0){
			var lastDigit = num % 10;
			order2 += lastDigit;
			num = parseInt(num/10);
		}
	}
	console.log(`this is even number : ${order1}`);
	console.log(`this is odd number : ${order2}`);
	
*/

/* 
var num = parseInt(prompt("enter a number"));
var reverse = 0;

while(num != 0){
	var lastDigit = num % 10;
	reverse += lastDigit;
	num = parseInt(num/10);
	
}
console.log(reverse);
 */
 
 var user = parseInt(prompt());
 var num = 0;
 var lastDigit;
 
 var result = user;
 while(result > 0){
	 lastDigit = result % 10;
	 num += lastDigit * lastDigit * lastDigit;
	 result = parseInt(result/10);
 }
 
 if(num == user){
	console.log(`this is amstrong number : ${user}`);
 }
 else{
	console.log(`this is not a amstrong number : ${user}`);
 }
