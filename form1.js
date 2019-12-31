var form = document.getElementById('name-form');
var eMail = document.getElementById('mail');
var phnNumber = document.getElementById('contact');
var newPass = document.getElementById('pass');
minChar = 8;
maxChar = 50;
form.onsubmit = function(e){
    e.preventDefault();
    console.log(form.uname.value);

     var regexp = /^[a-zA-z._]+@[a-zA-z._]+\.[a-zA-z]{2,4}$/;
     if(!regexp.test(form.email.value)){
        console.log("invalid");
        var x = "invalid";
      }
      else{
        console.log(eMail.value);
      }

    var regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,50}$/;
      if(!regexp.test(form.password.value)){
        console.log("invalid");
        var y = "invalid";
      }
      else{
        console.log(newPass.value);
      }
    
     var regexp = /^[0-9]{10}$/;
        if(!regexp.test(form.number.value)){
        console.log("invalid");
        var z = "invalid";
        }
        else{
        console.log(phnNumber.value);
        }
    form.reset();
    if(x ==="invalid" || y==="invalid" || z==="invalid"){
         alert('uh oh! something went wrong.') 
    }
    else{
       window.open("message.html");
    }
};



// form.onsubmit = function(e){
// 	e.preventDefault();
//     console.log(form.uname.value);
// 	console.log(form.email.value);
// 	if(form.password.value.length<8){
// 	console.log("password must be atleast 8 characters long.");
//     return true;
//     }
//     else if(form.password.value.length>=8){
//     	console.log(form.password.value);
//     }

//     if(form.number.value.length!=10){
//     	console.log("invalid contact");
//         return true;
//     }
//     else if(form.number.value.length==10){
//     	console.log(form.number.value);
//     }
// 	form.reset();
//     window.open("message.html");
// }

// #name
// var regexp = /^[a-zA-z ]+$/;
// #mail
// #pass
// var regexp = /^[a-zA-Z0-9!@#$%^&*]/;
// #contact
//

