/**
 * 
 */function checkPass() {
var pass1=document.getElementById('pass1');
var pass2=document.getElementById('pass2');
var message=document.getElementById('confirmMessage');
var goodColor="#66cc66";
var badColor="#ff6666";
if(pass1.value==pass2.value) {
pass2.style.backgroundColor=goodColor;
message.style.color = goodColor;
message.innerHTML="Password Match!"
}
else {
pass2.style.backgroundColor=badColor;
message.style.color = badColor;
message.innerHTML="Password Does Not Match!"

}
}
function checkValid() {
var str=document.getElementById('pass1').value;
var msg=document.getElementById('confirmMessage1');
var goodColor="#66cc66";
var badColor="#ff6666";
if (str.match(/[a-z]/g) && str.match(/[A-Z]/g) && str.match(/[0-9]/g) && str.length >= 8) 
{
   pass1.style.backgroundColor=goodColor;
   msg.innerHTML = "<span style='color: green;'>"+ 
                        "Password accepted</span>" 
}
                
   else 
      {
               pass1.style.backgroundColor=badColor;
                msg.innerHTML = "<span style='color: red;'>"+ 
                        "Your password does not follow the password policy</span>" 
  
        } 
      
     
}
