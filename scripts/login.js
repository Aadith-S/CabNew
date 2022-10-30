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
var btnlogin = document.getElementById("btnLogin");
var element = document.querySelectorAll("#loginForm input");
element.forEach(e=>{
    e.addEventListener('keyup',function(){
        let name = document.forms["loginForm"]["userName"];
        let pass = document.forms["loginForm"]["passWord"];
        if(name.value == "" || pass.value == "")
        {
            btnLogin.setAttribute("disabled",true);
        }
        else{
            btnLogin.removeAttribute("disabled");
        }
    })
})