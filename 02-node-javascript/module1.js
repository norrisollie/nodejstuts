// module1.js

function myFunction() {
	console.log("function was called");

};

var myString = "string!";

module.exports.myFunction = myFunction;
module.exports.myString = myString;