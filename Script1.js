function validate() {
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var adhaar = document.getElementById("adhaar");
    var pincode = document.getElementById("pincode");
    if (adhaar.value.length > 12 || adhaar.value.length < 12) {
        alert("Incorrect Adhaar number")
        return false;
    }
    if (pincode.value.length > 9 || pincode.value.length < 9) {
        alert("Incorrect Pincode")
        return false;
    }
    if (firstname.value == "" || lastname.value == "" || pincode.value == "" || adhaar.value == "") {
        alert("No blank values allowed")
        return false;
    }
    else
        {
          return  true;
        }

    }

// JavaScript source code
