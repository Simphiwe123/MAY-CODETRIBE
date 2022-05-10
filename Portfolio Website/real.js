



const topbooks= ["An Infinite Faith","The Thin Blue Cross","Peak Perfomance","Wildfire"];
document.getElementById("h21").innerHTML=topbooks[0];
document.getElementById("h22").innerHTML=topbooks[1];
document.getElementById("h23").innerHTML=topbooks[2];
document.getElementById("h24").innerHTML=topbooks[3];


const booksd1 =["132 Pages, 13 Chapters.","100 Pages, 10 Chapters.","56 Pages, 5 Chapters.","200 Pages, 16 Chapters."];
document.getElementById("p1d").innerHTML=booksd1[0];
document.getElementById("p2d").innerHTML=booksd1[1];
document.getElementById("p3d").innerHTML=booksd1[2];
document.getElementById("p4d").innerHTML=booksd1[3];

const blbooks=["His Flower Queen","Happily Ever After","Club Shadowlands","Sign Off","Deliver Me"];
document.getElementById("h4b1").innerHTML=blbooks[0];
document.getElementById("h4b2").innerHTML=blbooks[1];
document.getElementById("h4b3").innerHTML=blbooks[2];
document.getElementById("h4b4").innerHTML=blbooks[3];
document.getElementById("h4b5").innerHTML=blbooks[4];

const author_names=["J.K. Rowling","Stephen King","Danielle Steel","Famous Authors"];
document.getElementById("author11").innerHTML=author_names[0];
document.getElementById("author12").innerHTML=author_names[1];
document.getElementById("author13").innerHTML=author_names[2];
document.getElementById("fauthor").innerHTML=author_names[3];


const topics = ["Books you read last","New Release",];
document.getElementById("nr").innerHTML=topics[0];
document.getElementById("nr1").innerHTML=topics[1];

const num_books=["10 Books", "100 Novels" ,"179 Books"];
document.getElementById("bookno1").innerHTML=num_books[0];
document.getElementById("bookno2").innerHTML=num_books[1];
document.getElementById("bookno3").innerHTML=num_books[2];

const bl_books_names=["Lena Hart","Jenn Faulk","Charise Sinclair","Patricia McLinn","Farrah Rochon"];
document.getElementById("blbooksname1").innerHTML=bl_books_names[0];
document.getElementById("blbooksname2").innerHTML=bl_books_names[1];
document.getElementById("blbooksname3").innerHTML=bl_books_names[2];
document.getElementById("blbooksname4").innerHTML=bl_books_names[3];
document.getElementById("blbooksname5").innerHTML=bl_books_names[4];

const side_div=["Welcome back"];
document.getElementById("Welcomeid").innerHTML=side_div[0];


    function reg(e){
        event.preventDefault();
        var Name=document.getElementById('Name').value;
        var lName=document.getElementById('lName').value;
        var mail=document.getElementById('mail').value;
        var Password=document.getElementById('Password').value;
        var imagess=document.getElementById('imagess').value;


        var user={
            Name: Name,
            lName: lName,
            mail: mail,
            Password: Password,
            imagess: imagess,


        };
        var json= JSON.stringify(user);
        localStorage.setItem(Name,json);
       

    }
    function log(e){
        event.preventDefault();
     
        var maill=document.getElementById('maill').value;
        var Passwordl=document.getElementById('Passwordl').value;

        var mailA=localStorage.getItem(maill);
        var data=JSON.parse(mailA);
        console.log(data);

        if(mailA == null){

            alert("Wrong Email!")
        }else if(maill == data.maill && Passwordl == data.Passwordl){
            alert("WELCOME!");

        }else{

            alert("OOPS!");
        }



      

    }



