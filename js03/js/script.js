var height = parseInt(prompt("what is your height in centimeter"));

if(height>=0 && height<=150){
	console.log("you are shot");
}else if(height>=150 && height<=165){
	console.log("you are normal");
}else if(height>=165 && height<=195){
	console.log("you are height")
}else if(height>=195){
	console.log("you are abnormal")
}

/*
var one = parseInt(prompt("person one"));
var two = parseInt(prompt("person two"));
var three = parseInt(prompt("person three"));

if(one > two && one > three){
	if(two>three){
		console.log(`person one is older than two`);
		console.log(`person two is older than three`);
	}else if(two<three){
		console.log(`person one is older than three`);
		console.log(`person three is older than two`);
	}
}else if(two > one && two > three){
	if(one>three){
		console.log(`person two is older than one`);
		console.log(`person one is older than three`);
	}else if(one<three){
		console.log(`person two is older than three`);
		console.log(`person three is older than two`);
	}
}else if(three > one && three > two){
	if(one>two){
		console.log(`person three is older than one`);
		console.log(`person one is older than two`);
	}else if(one<two){
		console.log(`person three is older than two`);
		console.log(`person two is older than one`);
	}
}
