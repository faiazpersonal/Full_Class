/* Factorial, Form Submit to a New Window,Form jason data input,Form Validation data

01. (ev) prevent ev.preventDefault  eta use kora hoy muloto kono data zeno auto submit na hoy 
02. querySelector  eta use kora hoy html er kono div er vitore kono teg ke use korte cai tahole 
amader ei querySelector use korte hobe  
==================================================================================*/

/*
// factorial input ========================================================================
const number = parseInt(prompt("Enter a positive intiger value:"));
		 if(number < 0)
		 {
		 	document.write("Error! Factorial for negative number does not exists.");
		 }

		 else if(number === 0)
		 {
		 	document.write(`The factorial of 0 ${number} is 1`);
		 }

		 else
		 {
		 	let fact = 1;
		 	for(i = 1; i <= number; i++)
		 	{
		 		fact *=i;
		 	}
		 	document.write(`The factorial of ${number} is ${fact}.`);
		 }

*/

/*
// Form jason data input ========================================================================

let movies = [];

		var addMovie = function(ev)
		{
			ev.preventDefault();

			let movie = {

					id: Date(),
					title: document.getElementById("title").value,
					year: document.getElementById("yr").value
			}

			movies.push(movie);
			console.warn('added',{movies});
			let pre = document.querySelector('#msg pre');
			pre.textContent = '\n' + JSON.stringify(movies,'\t',2);

		}

		document.addEventListener('DOMContentLoaded',()=>{

			document.getElementById("btn").addEventListener('click',addMovie);
		});

*/


// Form Validation data ===============================================================
/*
function validateForm()
		{
			var name1 = document.getElementById("fname").value;
			var name2 = document.getElementById("lname").value;
			var pw1 = document.getElementById("pwd1").value;
			var pw2 = document.getElementById("pwd2").value;

			if(name1 == "")
			{
				document.getElementById("blkmsg").innerHTML="**Fill the First Name";
			}
			else {
				document.getElementById("blkmsg").innerHTML="";
			}

			if(!isNaN(name1))
			{
				document.getElementById("blkmsg").innerHTML="**Only Character are allowed";
			return false;
			}

			if(!isNaN(name2))
			{
				document.getElementById("charMsg").innerHTML="**Only Character are allowed";
				return false;
			}

			if(pw1 == "")
			{
				document.getElementById("message1").innerHTML="**Fill Password";
			}


			if(pw2=="")
			{
				document.getElementById("message2").innerHTML="Confirm Your Password";
			}

			if(pw1.length < 8)
			{
				document.getElementById("message1").innerHTML="**Password length should be more than 8 characters";
				return false;
			}

			if(pw1 != pw2)
			{
					document.getElementById("message2").innerHTML="Password are not same";
					return false;
			}

			else
			{
				alert("Your Registration ID created Successfully");
				document.write("Form data has been submitted");
			}
		}

*/
/* Form Submit to a New Window
 =================================================================================*/
function dyn_window()
		{
			var title = "My Title";
			var name = document.f.txtName.value;
			var address = document.f.txtAddress.value;
			var course = document.f.txtCourse.value;
			var sex = "";
			var subject = "";

			for(i = 0; i<document.f.rdoSex.length; i++)
			{
				if(document.f.rdoSex[i].checked)
				{
					sex = document.f.rdoSex[i].value;
				}
			}

				for(j = 0; j<document.f.chkSubject.length; j++)
				{
				if(document.f.chkSubject[j].checked)
				{
					subject += document.f.chkSubject[j].value+",";
				}
			}

			a = open('','','width=400, height=350');

			with(a.document)
			{
				write("<html>");
				write("<head><title>"+title+"</title></head>");
				write("<body>");
				write("<div style='border:1px solid gray'>Name:"+name+"<br>");
				write("Address:"+address+"<br>");
				write("Courses:"+course+"<br>");
				write("Sex:"+sex+"<br>");
				write("Subject:"+subject+"<br>");
				write("<input type='button' value='Close' onclick='self.close();'>");
				write("<input type='button' value='Print' onclick='self.print();'>");
				write("</body>");
				write("</html>");
			}
		}