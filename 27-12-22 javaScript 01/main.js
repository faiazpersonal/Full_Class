document.write("<h1> Hallo World </h1>");

var one = 10;
var two = 3;

var add = one + two;
// alert(" Ei broo ki obost Tumar.")
document.write(add)

// var name = prompt("Enter Your Name") //Disply popup form menu
// document.write(name + (""));

function ShowName() {
    var num1 = parseFloat(prompt("Enter Your first number: "));
    var num2 = parseFloat(prompt("Enter Your secend number: "));
    var total = num1 + num2
    document.getElementById("showname").innerHTML = total;
}
