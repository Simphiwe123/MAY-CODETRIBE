const logandreg=["LOGIN FORM","REGISTRATION FORM"];
document.getElementById('logt').innerHTML=logandreg[0];
document.getElementById('regt').innerHTML=logandreg[1];

        function reg(){

var Name = document.getElementById('Name');
var lName = document.getElementById('lName');
var mail = document.getElementById('mail');
var Password = document.getElementById('Password');
var imagess = document.getElementById('imagess');

    sessionStorage.setItem('Name', Name.value);
    sessionStorage.setItem('lName',lName.value);
    sessionStorage.setItem('mail',mail.value);
    sessionStorage.setItem('Password', Password.value);
    sessionStorage.setItem('imagess', imagess.value);
    alert('Your account has been created');
}

//document.getElementById('loginResult').innerHTML=localStorage.getItem('name');



function loginn(){
    var logmail=sessionStorage.getItem('mail');
    var lopw=sessionStorage.getItem('Password') ;

    var maibox=document.getElementById('maill').value;
    var passbox=document.getElementById('Passwordl').value;

    //document.getElementById('loginResult').innerHTML=logmail;
    //alert(lopw);
    if(maibox != logmail ){

        alert("Wrong Email ") ;

    }
    else if(passbox != lopw){
        alert("Wrong Password");

    }
    else{
        // alert("Welcome "+localStorage.getItem('Name')+" "+localStorage.getItem('lName'));
        
        window.location.href="home.html";
        

    }
}
