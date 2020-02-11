function passwordVisible() {
    let x = document.getElementById("passwordInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function strengthCheck() {
    let passwordValue = document.getElementById("passwordInput").value;
    let strengthValue = 0;

    if (passwordValue.length >= 20) {
        strengthValue += 1;
    }



    if(passwordValue.length == 0){
        document.getElementById("strengthOutput").innerHTML = "Please Enter Password";
    }
    else if(strengthValue == 0){
        document.getElementById("strengthOutput").innerHTML = "Your Password is Extremely Weak";
    }
    else if(strengthValue == 1){
        document.getElementById("strengthOutput").innerHTML = "Your Password is Weak";
    }
}