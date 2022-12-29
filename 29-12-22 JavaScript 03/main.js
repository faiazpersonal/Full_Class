// pop, shift, push, unshift, splice,  do while lop, brack, continue, associative array,Malti Dimentional array ==============================================================================================


var arr = ["jamil", "kamal","Hasan", "Zahir", "Masum", "Sagor"]
        // var x = arr.toString();
        var y = arr.join("|");
        // alert(x);
        // docoment.write(y);
        
        const st ="How are You?";
        var st2 = st.split("");
        document.write(st2);


document.getElementById("myarr").innerHTML = arr.toString();

document.write("<br>");

// pop ==============================================================================================
arr.pop();
document.write(arr); // last dik theke delete hobe 
document.write("<br>");

// shift ==============================================================================================
arr.shift(); // first dik diye delete hobe 
document.write(arr);
document.write("<br>");


// shift push ==============================================================================================
arr.push("faiaz"); // last  dik diye add hobe 
document.write(arr);
document.write("<br>");


// unshift ==============================================================================================
arr.unshift("NjFaiaz"); // first  dik diye add hobe 
document.write(arr);
document.write("<br>");

// splice ==============================================================================================
arr.splice(2,0, "Limon", "Roni"); // 0 manei no romovial without any romovial add mane kono romove chara new add kora zay
document.write(arr);
document.write("<br>");

arr.splice(1, 2, "kobir", "karima"); // eikhane 1, er pore ze koto lekha hobe ta remove kore oi new data rakhbe zemon 2 
document.write(arr);
document.write("<br>");

// do while lop ==============================================================================================
document.write("<br><br>");
var i = 5;
document.write("Even numbers are listed bellow: ");
do {
        document.write(i+ "<br>");
        i = i+5;
}
while(i<50);
// Brack Statment ==============================================================================================
 let sum = 0;
 while(true) {
        let value = +prompt("Enter a value: ");
        if (!value) break;
        // document. write(typeof value);
        sum+=value;
 }
 document.write('Sum is:'+sum );
 document.write("<br><br><br><br>");
// Continue Statment ==============================================================================================
for (let x = 1; x <20; x++){
        if (x % 2 == 0) continue;
        document.write(x);
}

document.write("<br><br><br><br>");
// associative array ==============================================================================================
var subject = new Array();
subject['Cp'] = "Computer Program";
subject['CG'] = "Computer Graphics"
subject['DBNS'] = "Database Management System"

for (var i in subject){
        document.write("The index is: <b>"+i);
        document.write("</b> || and the vilue is:<b>"+subject[i]+"</b><br>");
}
document.write("<br><br><br><br>");
// Malti Dimentional array ==============================================================================================
var userdata = [
        ["Faiaz",22],
        ["Forhad", 23],
        [" Arafat", 26]
]
for (var i = 0; i < userdata.length; i++){
        for (var j = 0; j <userdata[i].length; j++){
                document.write(userdata[i][j]+ "<br>");
        }
}



