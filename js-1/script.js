function validate() {
    var u = document.getElementById("u").value;
    var p = document.getElementById("p").value;
    var cp = document.getElementById("cp").value;
    var email = document.getElementById("email").value;

    if (u == "" || p == "") {
        alert("Fields cannot be empty");

    }

    if (p != cp) {
        alert("Passwords do not match");

    }
    if(p.length<8)
    {
        alert("password should be minimum 8 length");
    }

    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("Enter a valid email");
        return false;
    }

}
