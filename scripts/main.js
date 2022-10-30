function validate(e)
{
    let pickup = document.forms["srch"]["pickup"];
    let dest = document.forms["srch"]["dest"];
    let error = document.forms["srch"]["error"];
    if(pickup.value == dest.value)
    {   e.preventDefault();
        alert("Same Location")

    }
}