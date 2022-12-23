
var word1 = prompt("enter first name");
var word2 = prompt("enter first name");

var count1 = 0;
var count2 = 0;
var value1="";
var value2="";

for(let i=0;i<word1.length;i++){
	let x = word1[i];
	if(x=="a"||x=="A"||x=="e"||x=="E"||x=="i"||x=="I"||x=="o"||x=="O"||x=="u"||x=="U"){
		count1++;
	}else{
		value1+=word1[i];
	}
}
for(let i=0;i<word2.length;i++){
	let x = word2[i];
	if(x=="a"||x=="A"||x=="e"||x=="E"||x=="i"||x=="I"||x=="o"||x=="O"||x=="u"||x=="U"){
		count2++;
		
	}else{
		value2+=word2[i];
	}
}
console.log(value2)
console.log(value1)


if(count1>count2){
	console.log("word one has a largest vowels count")
}else if(count1==count2){
	console.log("word one and two has same vowels count")
}
else{
	console.log("word two has a largest vowels count")
}


