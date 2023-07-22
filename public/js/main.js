// The following code is used to toggle menu

const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');
const deleteStation = document.querySelector('#delete-station');
const deleteReading = document.querySelector('#delete-reading');
burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});

// Validates addReading Form
function validateReadingForm() {
    var valid = true;
    var checkCode = document.forms["addReading"]["code"].value;
    var checkTemperature = document.forms["addReading"]["temperature"].value;
    var checkWindSpeed = document.forms["addReading"]["windSpeed"].value;
    var checkWindDirection = document.forms["addReading"]["windDirection"].value;
    var checkPressure = document.forms["addReading"]["pressure"].value;

    if (checkCode == "") {
        document.forms["addReading"]["code"].classList.add('is-danger');
        document.getElementById("selectCode").classList.add('is-danger');
        document.getElementById("errTemperature").style.display = "block";
        document.getElementById("errCode").innerHTML = "Select a Code";
        valid = false;
    } else {
        document.forms["addReading"]["code"].classList.add('is-success');
        document.forms["addReading"]["code"].classList.remove('is-danger');
        document.getElementById("selectCode").classList.add('is-success');
        document.getElementById("selectCode").classList.remove('is-danger');
        document.getElementById("errCode").style.display = "none";
    }

    if (checkTemperature == "") {
        document.forms["addReading"]["temperature"].classList.add('is-danger');
        document.getElementById("errTemperature").style.display = "block";
        document.getElementById("errTemperature").innerHTML = "Enter the Temperature";
        valid = false;
    } else {
        document.forms["addReading"]["temperature"].classList.add('is-success');
        document.forms["addReading"]["temperature"].classList.remove('is-danger');
        document.getElementById("errTemperature").style.display = "none";
    }

    if (checkWindSpeed == "") {
        document.forms["addReading"]["windSpeed"].classList.add('is-danger');
        document.getElementById("errWindSpeed").style.display = "block";
        document.getElementById("errWindSpeed").innerHTML = "Enter the Wind Speed";
        valid = false;
    } else {
        document.forms["addReading"]["windSpeed"].classList.add('is-success');
        document.forms["addReading"]["windSpeed"].classList.remove('is-danger');
        document.getElementById("errWindSpeed").style.display = "none";
    }

    if (checkWindDirection == "") {
        document.forms["addReading"]["windDirection"].classList.add('is-danger');
        document.getElementById("errWindDirection").style.display = "block";
        document.getElementById("errWindDirection").innerHTML = "Enter the Wind Speed";
        valid = false;
    } else {
        document.forms["addReading"]["windDirection"].classList.add('is-success');
        document.forms["addReading"]["windDirection"].classList.remove('is-danger');
        document.getElementById("errWindDirection").style.display = "none";
    }

    if (checkPressure == "") {
        document.forms["addReading"]["pressure"].classList.add('is-danger');
        document.getElementById("errPressure").style.display = "block";
        document.getElementById("errPressure").innerHTML = "Enter the Pressure";
        valid = false;
    } else {
        document.forms["addReading"]["pressure"].classList.add('is-success');
        document.forms["addReading"]["pressure"].classList.remove('is-danger');
        document.getElementById("errPressure").style.display = "none";
    }

    return valid;
}

// Validates addStationForm
function validateStationForm() {
    var valid = true;
    var checkName = document.forms["addStation"]["name"].value;
    var checkLatitude = document.forms["addStation"]["latitude"].value;
    var checkLongitude = document.forms["addStation"]["longitude"].value;

    if (checkName == "") {
        document.forms["addStation"]["name"].classList.add('is-danger');
        document.getElementById("errName").style.display = 'block';
        document.getElementById("errName").innerHTML = "Enter the Station Name";
        valid = false;
    } else {
        document.forms["addStation"]["name"].classList.add('is-success');
        document.forms["addStation"]["name"].classList.remove('is-danger');
        document.getElementById("errName").style.display = "none";
        valid = true;
    }

    if (checkLatitude == "") {
        document.forms["addStation"]["latitude"].classList.add('is-danger');
        document.getElementById("errLatitude").style.display = "block";
        document.getElementById("errLatitude").innerHTML = "Enter Latitude";
        valid = false;
    } else {
        if (checkLatitude >= -90 && checkLatitude <= 90) {
            document.forms["addStation"]["latitude"].classList.add('is-success');
            document.forms["addStation"]["latitude"].classList.remove('is-danger');
            document.getElementById("errLatitude").style.display = "none";
            valid = true;
        } else {
            document.forms["addStation"]["latitude"].classList.add('is-danger');
            document.getElementById("errLatitude").style.display = "block";
            document.getElementById("errLatitude").innerHTML = "Between -90 and 90";
            valid = false;
        }
    }

    if (checkLongitude == "") {
        document.forms["addStation"]["longitude"].classList.add('is-danger');
        document.getElementById("errLongitude").style.display = "block";
        document.getElementById("errLongitude").innerHTML = "Enter Longitude";
        valid = false;
    } else {
        if (checkLongitude >= -180 && checkLongitude <= 180) {
            document.forms["addStation"]["longitude"].classList.add('is-success');
            document.forms["addStation"]["longitude"].classList.remove('is-danger');
            document.getElementById("errLongitude").style.display = "none";
            valid = true;
        } else {
            document.forms["addStation"]["longitude"].classList.add('is-danger');
            document.getElementById("errLongitude").style.display = "block";
            document.getElementById("errLongitude").innerHTML = "Between -180 and 180";
            valid = false;
        }
    }

    return valid;
}

// Validates RegisterForm
function validateRegisterForm() {
    var valid = true;
    var checkFirstName = document.forms["frmRegister"]["firstname"].value;
    var checkLastName = document.forms["frmRegister"]["lastname"].value;
    var checkEmail = document.forms["frmRegister"]["email"].value;
    var checkPassword = document.forms["frmRegister"]["password"].value;
    var checkConfirmPassword = document.forms["frmRegister"]["confirm_password"].value;

    if (checkFirstName == "") {
        document.forms["frmRegister"]["firstname"].classList.add('is-danger');
        document.getElementById("errFirstName").style.display = 'block';
        document.getElementById("errFirstName").innerHTML = "Enter Your First Name";
        valid = false;
    } else {
        document.forms["frmRegister"]["firstname"].classList.add('is-success');
        document.forms["frmRegister"]["firstname"].classList.remove('is-danger');
        document.getElementById("errFirstName").style.display = "none";
    }

    if (checkLastName == "") {
        document.forms["frmRegister"]["lastname"].classList.add('is-danger');
        document.getElementById("errLastName").style.display = "block";
        document.getElementById("errLastName").innerHTML = "Enter Your Last Name";
        valid = false;
    } else {
        document.forms["frmRegister"]["lastname"].classList.add('is-success');
        document.forms["frmRegister"]["lastname"].classList.remove('is-danger');
        document.getElementById("errLastName").style.display = "none";
    }

    if (checkPassword == "") {
        document.forms["frmRegister"]["password"].classList.add('is-danger');
        document.getElementById("errPassword").style.display = "block";
        document.getElementById("errPassword").innerHTML = "Enter A Password";
        valid = false;
    } else if (checkPassword.length < 7) {
        document.forms["frmRegister"]["password"].classList.add('is-danger');
        document.getElementById("errPassword").style.display = "block";
        document.getElementById("errPassword").innerHTML = "Password has to be 7 or more characters";
        valid = false;
    }  else {
        document.forms["frmRegister"]["password"].classList.add('is-success');
        document.forms["frmRegister"]["password"].classList.remove('is-danger');
        document.getElementById("errPassword").style.display = "none";
    }

    if (checkConfirmPassword == "") {
        document.forms["frmRegister"]["confirm_password"].classList.add('is-danger');
        document.getElementById("errConfirmPassword").style.display = "block";
        document.getElementById("errConfirmPassword").innerHTML = "Confirm Your Password";
        valid = false;
    } else {
        if (checkPassword == checkConfirmPassword) {
            document.forms["frmRegister"]["confirm_password"].classList.add('is-success');
            document.forms["frmRegister"]["confirm_password"].classList.remove('is-danger');
            document.getElementById("errConfirmPassword").style.display = "none";
        } else {
            document.forms["frmRegister"]["confirm_password"].classList.add('is-danger');
            document.getElementById("errConfirmPassword").style.display = "block";
            document.getElementById("errConfirmPassword").innerHTML = "Password & Confirm Password Do Not Match.";
            valid = false;
        }
    }

    if (checkEmail == "") {
        document.forms["frmRegister"]["email"].classList.add('is-danger');
        document.getElementById("errEmail").style.display = "block";
        document.getElementById("errEmail").innerHTML = "Enter A Valid Email";
        valid = false;
    } else {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (checkEmail.match(mailformat)) {
            document.forms["frmRegister"]["email"].classList.add('is-success');
            document.forms["frmRegister"]["email"].classList.remove('is-danger');
            document.getElementById("errEmail").style.display = "none";
        } else {
            document.forms["frmRegister"]["email"].classList.add('is-danger');
            document.getElementById("errEmail").style.display = "block";
            document.getElementById("errEmail").innerHTML = "Enter A Valid Email";
            valid = false;
        }
    }
    return valid;
}
