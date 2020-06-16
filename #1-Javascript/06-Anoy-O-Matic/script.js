// Version 1
// var answer = prompt("Are we there yet? (Please answer yes or ya)");

// while(answer !== "yes" && answer !== "ya"){
//     var answer = prompt("Are we there yet? (Please answer yes or ya)");
// }

// alert("done!");

// Version 2
var answer = prompt("Are we there yet? (Please answer yes or ya)");

while(answer.indexOf("yes") == -1 && answer.indexOf("ya") == -1) {
    alert("Salah!!")
    var answer = prompt("Are we there yet? (Please answer yes or ya)");
}

alert("done!");
