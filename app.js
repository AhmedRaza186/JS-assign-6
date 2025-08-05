var city = prompt("Enter your city")

if (city === "karachi") {
    alert("Welcome to city of lights")
}


var gender = prompt("What is your gender")
if (gender === "male") {
    alert("Good Morning Sir")
}
else if (gender === "female") {
    alert("Good Morning Mam")
}
else {
    alert("There are only two genders")
}


var signal = prompt("what is the color of road traffic signal")
document.writeln("<br><table border='1' cellpadding='5'>");
document.writeln("<tr><th>Signal color</th><th>Message</th></tr>");
document.writeln("<tr><td>RED</td><td>Must Stop</td></tr>")
document.writeln("<tr><td>Yellow</td><td>Ready to move</td></tr>")
document.writeln("<tr><td>Green</td><td>Goooo</td></tr>")


var fuel = +prompt("Remaining fuel in your car??")
if (fuel <= 0.25) {
    alert("please refill fuel")
}

// a
var a = 4
if (++a === 5) {
    alert("Given condition is true")
}

// b
var b = 82;
if (b++ == 83) {
    alert("given condition for variable b is true");
}
// c
var c = 12;
if (c++ == 13) {
    alert("condition 1 is true");
}
if (c == 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c == 14) {
    alert("condition 4 is true");
}
// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost == laborCost + materialCost) {
    alert("The cost equals");
}

// e
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

// f
if ("car" < "cat") {
    alert("car is smaller than cat")
}



var subject1 = +prompt("Enter marks for Subject 1:");
var subject2 = +prompt("Enter marks for Subject 2:");
var subject3 = +prompt("Enter marks for Subject 3:");
var totalMarks = 300

var obtained = subject1 + subject2 + subject3
var percentage = (obtained / totalMarks) * 100
var grade, remarks

if (percentage >= 80) {
    grade = "A-one"
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A"
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B"
    remarks = "You need to improve"
} else {
    grade = "Fail"
    remarks = "Sorry"
}
alert(
    `Total Marks: ${totalMarks}\nMarks Obtained: ${obtained}\nPercentage: ${percentage.toFixed(2)}%\nGrade: ${grade}\nRemarks: ${remarks}`
)


var secret = 8
var guess = +prompt("Guess the secret number (1-10):")
if (guess === secret) {
    alert("Bingo! Correct answer")
} else if (guess + 1 === secret || guess - 1 === secret) {
    alert("Close enough to the correct answer")
}



var number = +prompt("Enter a number:")
if (number % 3 === 0) {
    alert("The number is divisible by 3")
} else {
    alert("The number is not divisible by 3")
}


var num = +prompt("Enter a number:");
if (num % 2 === 0) {
    alert("Even number")
} else {
    alert("Odd number")
}



var temp = +prompt("Enter temperature:");
if (temp > 40) {
    alert("It is too hot outside.");
} else if (temp > 30) {
    alert("The Weather today is Normal.");
} else if (temp > 20) {
    alert("Today’s Weather is cool.");
} else if (temp > 10) {
    alert("OMG! Today’s weather is so Cool.");
}


var num1 = +prompt("Enter first number:")
var num2 = +prompt("Enter second number:")
var operation = prompt("Enter operation (+, -, *, /, %):")
var result

if (operation === "+") {
    result = num1 + num2
} else if (operation === "-") {
    result = num1 - num2
} else if (operation === "*") {
    result = num1 * num2
} else if (operation === "/") {
    result = num1 / num2
} else if (operation === "%") {
    result = num1 % num2
} else {
    result = "Invalid operation"
}

alert("Result: " + result)
