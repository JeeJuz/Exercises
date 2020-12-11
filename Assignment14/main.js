function submit(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var timezone = document.getElementById("timeZone").value;
  var terms = document.getElementById("terms").checked;
  let re=new RegExp(/@/);
  let res=re.test(email);
  var error = [];

if (name.length > 0){
  document.getElementById("name").style.backgroundColor="white";
}else{
  error.push("First Name is required");
  document.getElementById("name").style.backgroundColor="pink";
}

if (email.length > 0 && res === true){
  document.getElementById("email").style.backgroundColor="white";
}else{
  error.push("Email Address is required");
  document.getElementById("email").style.backgroundColor="pink";
}

if (password.length > 0){
  document.getElementById("password").style.backgroundColor="white";
}else{
  error.push("Password is required");
  document.getElementById("password").style.backgroundColor="pink";
}

if ( timezone === ""){
  error.push("Timezone is Required");
  document.getElementById("timeZone").style.backgroundColor="pink";
}else{
  document.getElementById("timeZone").style.backgroundColor="white";
}

if (terms == true){
  document.getElementById("terms").style.backgroundColor="white";
}else{
  error.push("You must accept the terms and conditions");
  document.getElementById("terms").style.backgroundColor="pink";
}


var error1;

if (error.length > 0){
  error1 = '<ul class= error1> <li>' + error.join("</li> <li>") + "</li> </ul>"
}else{
  error1 = '<h1>Thank you for registering</h1>'
}




document.getElementById("message").innerHTML = error1;
}






function reset(){
  document.getElementById("name").value="";
  document.getElementById("email").value="";
  document.getElementById("password").value="";
  document.getElementById("timeZone").value="";
  document.getElementById("terms").checked= false;
  document.getElementById("message").innerHTML = "";
  document.getElementById("name").style.backgroundColor = "white";
  document.getElementById("email").style.backgroundColor = "white";
  document.getElementById("password").style.backgroundColor = "white";
  document.getElementById("timeZone").style.backgroundColor = "white";
  document.getElementById("terms").style.backgroundColor = "white";



}



var submitbtn = document.getElementById("submit")
submitbtn.addEventListener("click" , submit)

var resetbtn = document.getElementById("reset")
resetbtn.addEventListener("click" , reset)
