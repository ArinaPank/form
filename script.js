function passwordVerification(form){
    var pass = form.password.value;
    var passs = form.password1.value;
    if(pass !== passs){
        var error = document.getElementById("error");
        error.style.display = "inline";
    }

    else if(pass == passs){
        var error = document.getElementById("error");
        error.style.display = "none";
    }
}
function submitAction(form){
    var story = document.getElementById("story");
    story.innerHTML = "Здравствуйте, " + form.nameInput.value + ". Мы получили ваши данные, ожидайте.";
}