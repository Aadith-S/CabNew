function validate(e)
{
    let pickup = document.forms["srch"]["pickup"];
    let dest = document.forms["srch"]["dest"];
    let error = document.getElementById("error");
    if(pickup.value == dest.value)
    {   e.preventDefault();
        // alert("Same Location")
        error.innerText = "Same Location"
        error.style.color = "red";

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