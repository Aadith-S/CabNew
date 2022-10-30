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
        error.innerText = "Password doesn't match";
        error.style.color = "red";
    }
    else{
        error.innerText = "";
    }

}