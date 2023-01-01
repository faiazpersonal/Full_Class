// Function Scope, prime number, Regular Expression =================================================================================================
var xyz = 500; // Globle scope -----------------------

function a() {
    // var xyz = 10;
    if (xyz == 500){
        xyz = "Good ";
    }
    document.write(xyz);
}
function b() {
    document.write(xyz);
}
a();
b();

// Function prime number =================================================================================================
 function primenumber() {
    var number = document.getElementById("prime").value;
    var checkprime = true;
    if (number == 1) {
        document.write("1 is not a prime or non-prime number");
    }
    else if(number > 1) {
        for (var i = 2; i < number; i++) {
            if (number % i === 0 ) { // type or value 2 tai check korbe ei === ei 3 ta equale diye 
                checkprime = false;
                break;
            }
        }
        if (checkprime) {
            document.write(`${number} is a prime number`);
        }
        else {
            document.write(`${number} is a not prime number`);
        }
    }
    else {
        document.write(" Zero or negetiv number cannot be a prime number");
    }
}

// Regular Expression  =================================================================================================
var x = /hello/i;
var result = x.test("hello faiaz");
alert(result);

var course = "Web Development using Php and Framework";
var check = course.match(/[a-zA-Z]/); // match Cherecter mach korbe ei match ta.
var search = course.indexOf("Php");
var replace = course.replace("Php", " Laravel");
alert(check);
alert(search);
alert(replace);