function doclick(){
	var nameregex=/^[a-zA-Z]{3,15}$/;
	var phnregex=/[6-9]\d{9}/;
	var emailIdRegx=/^[a-z0-9]+@[a-z]+\.[a-z\.]{2,6}$/

	var uname = document.getElementById("name").value;
	var uphne = document.getElementById("phonum").value;
	var tech = document.getElementById("technames").value;
	var mail= document.getElementById("email").value;
	var drop= document.getElementById("technames").value;


	if(nameregex.test(uname) ==false)
	{
	  document.getElementById("username").innerHTML=" ** Please fill the name only with alphabets between 2 to 15 characters";
	
	}
	else{
	  document.getElementById("username").innerHTML="";
	}
	if(drop==="")
	{
		document.getElementById("tech").innerHTML=" **this filed is neccesary";
	}
	else{
		document.getElementById("tech").innerHTML="";
	}
	if(!phnregex.test(uphne))
	{
		document.getElementById("usernum").innerHTML=" **Phone Number should contain 10 digits and should start with 6,7,8,9";

	}
	else{
		document.getElementById("usernum").innerHTML="";
	}
	if(!emailIdRegx.test(mail))
	{
		document.getElementById("useremail").innerHTML=" **Invalid mail id";

	}
	else{
		document.getElementById("useremail").innerHTML="";
	}
	if(nameregex.test(tech) == "Choose from below")
	{
	  document.getElementById("technames").innerHTML=" ** Please fill the name only with alphabets between 2 to 15 characters";
	return 0;
	}
	else{
	  document.getElementById("technames").innerHTML="";
	}
	

	document.getElementsByClassName('form-center')[0].addEventListener('submit' , event => {
        event.preventDefault()
        doclick()})
	}
