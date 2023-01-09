/* 
01. resolv ow reject ei 2 ta defolt peramitter  

Promise function,

Loading JSON Data in Combo,Basic Promise,Promise Ex. 2
====================================================================================*/



// Loading JSON Data in Combo ======================================================= 

/*
var subcategory = {

    Mobile: ["Nokia","Samsung","iPhone"],
    Cloths: ['Shirt','Pants','T-Shirt']
}

function makeSubmenu(myvalue)
{
if(myvalue.length == 0)
{
document.getElementById("categorySelect").innerHTML="<option></option>";
}
else
{
var productOption = "";
for(categoryId in subcategory[myvalue])
{
productOption+="<option>"+subcategory[myvalue][categoryId]+"</option>";
}

document.getElementById("categorySelect").innerHTML=productOption;
}
}

function displaySelected()
{
var category = document.getElementById("category").value;
var subcategory = document.getElementById("categorySelect").value;
alert(category+"\n"+subcategory);
}
 */

// Basic Promise =================================================================
/*
var promise = new Promise(function(resolve, reject){

    var x = "araman";
    var y = "kamal";

    if(x == y)
    {
        resolve();
    }

    else
    {
        reject();
    }
});

promise.then(function(){

    document.write("Success");
}).catch(function(){
    document.write("Some errors has occured");
});
 */

// Promise Ex. 2 ===========================================================

const students = [

    {name:"kamal",subject:"Javascript"},
    {name:"Harry",subject:"Machine Learning"}
]

function enrollStudent(student)
{
return new Promise(function(resolve, reject){

    setTimeout(function(){

            students.push(student);
            console.log("Student has been enrolled");
            const error = false;
            if(!error)
            {
                resolve();
            }
            else
            {
                reject();
            }
    }, 1000);
})
}

function getStudents()
{
setTimeout(function(){

    let str = "";
    students.forEach(function(student){

        str+=`<li>${student.name} ${student.subject}</li>`
    });

    document.getElementById("students").innerHTML=str;
    console.log("Student has been fetched");
},5000);
}

let newStudent = {name:"Hasan", subject:"Python"};
enrollStudent(newStudent).then(getStudents).catch(function(){
console.log("some error occured");
});
//getStudents();