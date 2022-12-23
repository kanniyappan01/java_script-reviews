/*let n = parseInt(prompt());
let result = "";
for(i=0;i<n;i++){
	for(j=0;j<n;j++){
		result += "*";
	}
	result += "\n"
}
console.log(result)

*/

/*
let n = parseInt(prompt());
let result = "";

for(let i = 0; i < n; i++) {
	for(let j = 0; j < n; j++){
		if(i == 0 || i == n - 1){
			result += "*";
		}else{
			if(j==0 || j == n-1){
				result += "*";
			}else{
				result += " ";
			}
		}
	}
	result += "\n";
}
console.log(result);
*/
/*
var arr1=[];
var user = prompt("enter length");
for(i=0;i<user;i++){
	var arr2=[];
	var user2 = prompt("sub array length");
	for(j=0;j<user2;j++){
		arr2[j]=prompt("value");
	}
	arr1[i]=arr2;
}
console.log(arr1);

*/

//half tringle

// debugger;
// let rows = 6;
// let char = "";

// for (let i = 1; i <= rows; i++) {
  
//   for (let j = 0; j < rows - i; j++) {
//     char += " ";
//   }
  
//   for (let k = 0; k < i; k++) {
//     char += "*";
//   }
//   char += "\n";
// }
// console.log(char);


/*

let a=[[1,2],[5,4,2],[6,7,9,10]];

let b=a[0];
console.log(a);
let result1=0;
for(i=0;i<b.length;i++){
	result1 +=b[i];
	
}
let c=a[1];
console.log(c);
let result2=0;
for(i=0;i<c.length;i++){
	result2 +=c[i];
	
}
let d=a[2];
console.log(d);
let result3=0;
for(i=0;i<d.length;i++){
	result3 +=d[i];
	
}
console.log(result1);
console.log(result2);
console.log(result3);

*/

debugger;
let n = 5;
let string = "";

for (let i = 1; i <= n; i++) {

  for (let j = 1; j <= n - i; j++) {
    string += "-";
  }

  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);