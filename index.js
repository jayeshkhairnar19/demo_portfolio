function saveData()
{
let name, email, text, mytext;
name=document.getElementById("NAME").value;
email=document.getElementById("EMAIL").value;

text=document.getElementById("TEXT").value;
mytext=document.getElementById("MYTEXT").value;

localStorage.setItem("name",name);
localStorage.setItem("email",email);
localStorage.setItem("psw",text);
localStorage.setItem("psw",mytext);
let a = confirm("Do you really want to submit it?");
if(a){

    alert("Your Form has been Submitted! Thank You");
}
else{
    alert("Sorry, Your form has not been submitted yet.")
}
}