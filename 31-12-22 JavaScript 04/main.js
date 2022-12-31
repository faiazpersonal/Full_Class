// Function, Sorteing,CallBack,ArroFunction, Turnary operator =========================================================================================

function My_Name() {
    var a = 10;
    var b = 15;
    var c = a + b;
    // document.write(c);
    return c;
    c = 100;
    document.write(c); // ei khane 100 asar kotha but ase nai keno karon return lehar pore za lekhei hok na keno asbe na tar ans.
}
document.write("<br><br><br>")
var x = My_Name();
document.write(x);




function sum() {
    var a = parseInt(prompt("Enter a value: "));
    var b = parseInt(prompt("Enter a value: "));
    var c = a+b;
    return document.getElementById("mytotal").innerHTML=c;
}

function rokomari() {
    window.location.href="http://rokomari.com"
}
document.write("<br><br><br>")
// Sorteing =======================================================================
var a = parseInt(prompt("Enter a value: "));
var c = parseInt(prompt("Enter a value: "));
var b = parseInt(prompt("Enter a value: "));
if (a<b) {
    temp = a;
    a = b;
    b = temp;
}
if (a<c) {
    temp = a;
    a = c;
    c = temp;
}
if (b<c) {
    temp = b;
    b = c;
    c = temp;
}
document.write(a+" ",b+" ",c+" "); 
document.write("<br><br><br>")
// CallBack =========================================================================

function greet(name,myfunction){
    document.write("Hallo world");
    myfunction(name);
}
function tellname(name) {
    document.write("welcome" +" "+name);
}
setTimeout(greet,2000,'kamal',tellname);

document.write("<br><br><br>")

// ArroFunction =========================================================================

var x = (x,y) => x * y;
// alert(x(10,20));
document.write(x(10,20));

// Turnary operator  with out if else operator =========================================

var num = 5;
var check = (num>=10)?()=>alert("Num is big!"):()=> alert("Num is not big");

check();

// Argument Cinding in regular function 
let xyz = function() {
    document.write(arguments);
}
xyz(2,3,5);


  
