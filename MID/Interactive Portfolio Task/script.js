// Greeting

var hour=new Date().getHours();

if(hour<12)
{
document.getElementById("greeting").innerHTML="Good Morning";
}
else if(hour<18)
{
document.getElementById("greeting").innerHTML="Good Afternoon";
}
else
{
document.getElementById("greeting").innerHTML="Good Evening";
}

// Theme

function theme()
{

document.body.classList.toggle("dark");

}

// About

function showAbout()
{

document.getElementById("about").style.display="block";

document.getElementById("projects").style.display="none";

document.getElementById("contact").style.display="none";

}

// Projects

function showProjects()
{

document.getElementById("about").style.display="none";

document.getElementById("projects").style.display="block";

document.getElementById("contact").style.display="none";

}

// Contact

function showContact()
{

document.getElementById("about").style.display="none";

document.getElementById("projects").style.display="none";

document.getElementById("contact").style.display="block";

}

// Contact Validation

function handleSubmit()
{

var name=document.getElementById("name").value.trim();

var email=document.getElementById("email").value.trim();

var message=document.getElementById("message").value.trim();

document.getElementById("nameError").innerHTML="";

document.getElementById("emailError").innerHTML="";

document.getElementById("messageError").innerHTML="";

var valid=true;

if(name=="")
{

document.getElementById("nameError").innerHTML="* Name is required";

valid=false;

}

var pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(email=="")
{

document.getElementById("emailError").innerHTML="* Email is required";

valid=false;

}
else if(!pattern.test(email))
{

document.getElementById("emailError").innerHTML="* Invalid Email";

valid=false;

}

if(message=="")
{

document.getElementById("messageError").innerHTML="* Message is required";

valid=false;

}


if(valid)
{

alert("Contact Form Submitted Successfully");

document.getElementById("name").value="";

document.getElementById("email").value="";

document.getElementById("message").value="";

}

return false;

}