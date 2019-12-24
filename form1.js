var form = document.getElementById('name-form');
form.onsubmit = function(e){
	e.preventDefault();
	var result =  document.getElementById('result');
	console.log(form.fullName.value);
	console.log(form.email.value);
	console.log(form.password.value);
	console.log(form.number.value);
	form.reset();
}