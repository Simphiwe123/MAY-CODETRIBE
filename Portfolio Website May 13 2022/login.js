
function ValidationForm() {
             
    
    
   
    $("#RegForm").submit(function () {
      var enteredName = $("#E-mail").val();
      var enteredPass = $("#Password").val();
    alert(enteredName);
      var storedName = localStorage.getItem("e1");
      var storedPass = localStorage.getItem("p1");
    
      if (enteredName == storedName && enteredPass == storedPass) {
        alert("You are logged in!");
      }
      else {
        alert("Username and Password do not match!");
      }
    
    });
    
}

