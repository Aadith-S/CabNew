// function validate(e)
// {
//     let name = document.getElementById("userName").value;
//     let pass = document.getElementById("passWord").value;
//     if(name == "" || pass == "")
//     {
//         e.preventDefault()
//         document.getElementById("error").innerText = "Please Enter Details";
//     }
//     else{
//         document.getElementById("error").innerText = "";
//     } 
// }
logged = localStorage.getItem("logged");
console.log(logged);
var btnlogin = document.getElementById("btnLogin");
var element = document.querySelectorAll("#loginForm input");
var uname = document.forms["loginForm"]["userName"];
var pass = document.forms["loginForm"]["passWord"];
element.forEach(e=>{
    e.addEventListener('keyup',function(){
        // let name = document.forms["loginForm"]["userName"];
        // let pass = document.forms["loginForm"]["passWord"];
        if(name.value == "" || pass.value == "")
        {
            btnlogin.setAttribute("disabled",1);
        }
        else{
            btnlogin.removeAttribute("disabled");
        }
    })
})
function dont(e)
{
    e.preventDefault();
    console.log("hlodont");
    if(uname.value == "aadi" && pass.value == "12345678"){
        console.log("helo");
        localStorage.setItem("logged",1);
        console.log(logged);
    }
}

function check()
{
    if(logged == 1)
{   console.log("hlocheck");
    document.querySelectorAll(".loggedin").forEach(e=>{
        e.classList.add("dropdown-item");
    })
    document.querySelectorAll(".loggedout").forEach(e=>{
        e.classList.add("hide");
        e.classList.remove("dropdown-item");
    })
}
}
function logout()
{   
    localStorage.setItem("logged",0);
    console.log("hloout");
    document.querySelectorAll(".loggedin").forEach(e=>{
        e.classList.add("hide");
        e.classList.remove("dropdown-item");
    })
    document.querySelectorAll(".loggedout").forEach(e=>{
        e.classList.remove("hide");
        e.classList.add("dropdown-item");
    })
}