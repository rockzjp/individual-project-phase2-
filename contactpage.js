function validation(){
     var name = document.getElementById("name").value;
     var email = document.getElementById("email").value;
     var phone = document.getElementById("phone").value;
     var message = document.getElementById("message").value;
     

     if(name.length<4){
         alert("Please Enter At Least Four Letters");
         name.preventDefault() ;
     } 

     if(email.indexOf("@") == -1 || email.length < 5){
        alert("Please Enter Valid Email");
        name.preventDefault() ;
    } 

    if(isNaN(phone)||phone.length != 10 ){
        alert("Please Enter Valid Phone Number");
        name.preventDefault() ;
    } 

    if(message.length < 20){
        alert("Please Enter more than 20 characters");
        name.preventDefault() ;
    } 

     alert("Submitted Successfully")
     return true;
}

