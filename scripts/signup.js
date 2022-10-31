function validate(e)
{  
    var pass = document.querySelector("#pass");
    var conpass = document.querySelector("#conpass");
    var error = document.getElementById("error");
    console.log(pass.value);
    console.log(conpass.value);
    if(pass.value != conpass.value)
    {
        e.preventDefault();
        error.innerText = "Passwords don't match";
        error.style.color = "red";
    }
    else{
        error.innerText = "";
    }

}
check();
function check()
{
    if((localStorage.getItem("logged")) == 1)
{   console.log("hlocheck");
    document.querySelectorAll(".loggedin").forEach(e=>{
        e.classList.add("dropdown-item");
    })
    document.querySelectorAll(".loggedout").forEach(e=>{
        e.classList.add("hide");
        e.classList.remove("dropdown-item");
    })
    document.getElementById("pimg").setAttribute("src","css/download.jfif");
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
    document.getElementById("pimg").setAttribute("src","css/person.png");
}