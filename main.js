//pagication
//add message
// Selectors
document.querySelector('form').addEventListener('submit', handleSubmitForm);

function handleSubmitForm(e) {
    e.preventDefault();

    var add = document.querySelector('input');
    if (add.value != ''){document.getElementById("demo").innerHTML = ( add.value + " has been added");}
    else {document.getElementById("demo").innerHTML = "Please Enter TV Show Name";}
} //end add pages



//login form validate
function store(){
  var na = document.getElementById('name');
  var name = document.getElementById('email');
  var pw = document.getElementById('password');
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;

  if(name.value.length == 0){
      alert('Please fill in name');

    }else if(name.value.length < 6){
        alert('name letters lagerthan 5');

  }else if(email.value.length == 0){
      alert('Please fill in email');

  }else if(password.value.length == 0){
      alert('Please fill in password');

  }else if(email.value.length == 0 && password.value.length == 0){
      alert('Please fill in email and password');

  }else if(password.value.length != 8){
      alert(' password letters equal to 8');

  }else if(!password.value.match(numbers)){
      alert('please add 1 number in Password');

  }else if(!password.value.match(upperCaseLetters)){
      alert('please add 1 uppercase letter in Password');

  }else if(!password.value.match(lowerCaseLetters)){
      alert('please add 1 lovercase letter in Password');

  }else{
      localStorage.setItem('name', name.value);
      localStorage.setItem('pw', password.value);
      alert('Your account has been created');
  }
}

//checking
function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('uname');
    var userPw = document.getElementById('psw');

    if(uname.value == storedName && psw.value == storedPw){
        alert('Login Succesful');
    }else{
        alert('Unsuccessful');
    }
}


//signup form validate
$ (document).ready (function () {
  $.validator.setDefaults ({
    submitHandler: function() {
      alert ("success full submittesd!");
    }

  });

  $("#signup-form").validate ({
    rules:{
      name:"required",
      email:{
        required:true,
        email:true
      },
      password:{
        required:true,
        minlength:8
      }
    },
    messages:{
      name:"Please Enter Your Name",
      email:{
        required:"Your Email Address is required",
        email:"You email address is invalid"
      },
      password:{
        required:"Password is required",
        minlength:"Password Lenght Must be 8"
      }
    }
  });

});

//signup link
function myFunction()
{
  window.location.href = "signup.html";
}

//login link
function otherPage()
{
  window.location.href = "login.html";
}

//details to LOGIN
  function redirect()
  {
    window.location.href = "login.html";
  }


  //comedy to page
    function comedyPage()
    {
      window.location.href = "comedy.html";
    }

    function blankPage()
    {
      window.location.href = "blank.html";
    }

    function actionPage()
    {
      window.location.href = "action.html";
    }

    function advPage()
    {
      window.location.href = "adv.html";
    }

  
