

/*
Chap 3, Exer 3-1 The Future Value Application
define / declare ins & outs
get user inputs
	prompt
	convert user entry
	
validate user inputs
	use do-while to get at least one entry
	



calculate future value
display ins & outs

*/


var entry;
var investment;
var rate;
var numYears;
var futureValue;
var calcAnother;



do {
	//get user inputs
entry = prompt("Enter your investment amount: xxxxx.xx", 10000.00);
investment = parseFloat(entry);

entry = prompt("Enter the interest rate: xx.x", 6.5);
rate = parseFloat(entry);
 
entry = prompt("Enter the number of years: ", 10);
numYears = parseInt(entry);

//validate user inputs
	if (!isNaN(entry) {
		//calculate future value with for loop
		futureValue = investment;
		for (var i = 1; i <= numYears; i++) {
			futureValue += (futureValue * rate / 100);
		}
		futureValue = parseInt(futureValue);
		
		//display data
		document.write("Investment amount: " + investment + "<br>");
		document.write("Interest rate: " + rate + "<br>");
		document.write("Number of Years: " + numYears + "<br><br>");
		document.write("Future Value: " + futureValue + "<br><br>");
	} else {
		alert("Please enter a number.");
	}
	calcAnother = prompt("Calculate another investment scenario?", "yes or no");
}
while (calcAnother == "yes");
document.write("Thank you for using the Future Value Application.");




