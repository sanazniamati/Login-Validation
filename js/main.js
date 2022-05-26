function validation() {
  var username = document.getElementById("username").nodeValue;
  var password = document.getElementById("password").nodeValue;
  if (username == "admin" && password == "admin") {
    alert("login sucssfully");
    return false;
  } else {
    alert("login faild");
  }
}
