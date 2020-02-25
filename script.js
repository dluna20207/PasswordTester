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
    if (passwordValue.length >= 100) {
        strengthValue += 100;
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

    for (var i = 0; i < passwordValue.length; i++) {
        let numOfNum = 0;
        let character = passwordValue.charAt(i);
        if (!isNaN(character)) {
            numOfNum++;
        }
        if (numOfNum > 0) {
            strengthValue++;
            break;
        }
    }

    function checkSymbol() {
        let passwordValue = document.getElementById("passwordInput").value;
        let check = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
        if (check.test(passwordValue)) {
            strengthValue++;
        }
    }

    checkSymbol();

    if (passwordValue.length == 0) {
        document.getElementById("strengthOutput").innerHTML = "Please Enter Password";
        document.getElementById("mainBody").classList = ""
    }
    else if (strengthValue == 1) {
        document.getElementById("strengthOutput").innerHTML = "Your Password is Extremely Weak";
        document.getElementById("mainBody").classList = "red"
    }
    else if (strengthValue == 2) {
        document.getElementById("strengthOutput").innerHTML = "Your Password is Weak";
        document.getElementById("mainBody").classList = "orange"
    }
    else if (strengthValue == 3) {
        document.getElementById("strengthOutput").innerHTML = "Your Password is Normal";
        document.getElementById("mainBody").classList = "yellow"
    }
    else if (strengthValue == 4) {
        document.getElementById("strengthOutput").innerHTML = "Your Password is Somewhat Strong";
        document.getElementById("mainBody").classList = "green"
    }
    else if (strengthValue == 5) {
        document.getElementById("strengthOutput").innerHTML = "Your Password is Strong";
        document.getElementById("mainBody").classList = "blue"
    }
    else if (strengthValue == 6) {
        document.getElementById("strengthOutput").innerHTML = "Your Password is Very Strong";
        document.getElementById("mainBody").classList = "indigo"
    }
    else if (strengthValue > 100) {
        document.getElementById("strengthOutput").innerHTML = "Your Password is SUPER STRONG";
        document.getElementById("mainBody").classList = "rainbow"
    }
}