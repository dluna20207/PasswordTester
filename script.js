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

    if (passwordValue.length >= 15) {
        strengthValue++;
    }
    if (passwordValue.length >= 25) {
        strengthValue++;
    }

    for (var i = 0; i < passwordValue.length; i++) {
        let numOfLower = 0;
        let character = String(passwordValue.charAt(i))
        if (character == character.toLowerCase() && isNaN(character)) {
            numOfLower++;
        }
        if (numOfLower > 0) {
            strengthValue++;
            break;
        }
    }

    for (var i = 0; i < passwordValue.length; i++) {
        let numOfUpper = 0;
        let character = String(passwordValue.charAt(i))
        if (character == character.toUpperCase() && isNaN(character)) {
            numOfUpper++;
        }
        if (numOfUpper > 0) {
            strengthValue++;
            break;
        }
    }



    if (passwordValue.length == 0) {
        document.getElementById("strengthOutput").innerHTML = "Please Enter Password";
    }
    else if (strengthValue == 0) {
        document.getElementById("strengthOutput").innerHTML = "Your Password is Extremely Weak";
    }
    else if (strengthValue == 1) {
        document.getElementById("strengthOutput").innerHTML = "Your Password is Weak";
    }
    else if (strengthValue == 2) {
        document.getElementById("strengthOutput").innerHTML = "Your Password is Normal";
    }
    else if (strengthValue == 3) {
        document.getElementById("strengthOutput").innerHTML = "Your Password is Somewhat Strong";
    }
}