var form = document.getElementById('name-form');

form.onsubmit = function(e){
	e.preventDefault();
    console.log(form.uname.value);
	console.log(form.email.value);
	if(form.password.value.length<8){
	console.log("password must be atleast 8 characters long.");
    return true;
    }
    else if(form.password.value.length>=8){
    	console.log(form.password.value);
    }

    if(form.number.value.length!=10){
    	console.log("invalid contact");
        return true;
    }
    else if(form.number.value.length==10){
    	console.log(form.number.value);
    }
	form.reset();
	window.open("message.html");
}

