document.getElementById("click").addEventListener("click", function () {
  sentIt()
});

function checkAll() {
  myForm = document.forms["myForm"];
  let username = myForm["username"].value;
  let midname = myForm["midname"].value;
  let bfday = myForm["bfday"].value;
  let city = myForm["city"].value;
  let mail = myForm["mail"].value;
  let phone = myForm["phone"].value;
  let pass = myForm["pass"].value;
  let login = myForm["login"].value;

  if (username == "") {
    myForm["username"].focus();

    return false;
  }
  if (midname == "") {
    myForm["midname"].focus();
    return false;
  }
  if (bfday == "") {
    myForm["bfday"].focus();
    return false;
  }
  if (city == "") {
    myForm["city"].focus();
    return false;
  }
  if (mail == "") {
    myForm["mail"].focus();
    return false;
  }
  if (phone == "") {
    myForm["phone"].focus();
    return false;
  }
  if (pass == "") {
    myForm["pass"].focus();
    return false;
  }
  if (login == "") {
    myForm["login"].focus();
    return false;
  }
  return true;
}

function ValidateEmail() {
  let mail = document.getElementById("mail");
  let mailFormat = "[a-z0-9._%+-]+@[ a-z0-9.-]+.[a-z]{2,}$";
  if (mail.value.match(mailFormat)) {
    return true;
  }
}

function checkDate() {
  let bfday = document.getElementById("bfday");
  var date_regex =
    /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  if (bfday.value.match(date_regex)) {
    /*alert("valid date");*/
    return true;
  }
}
function sentIt() {
  let e = window.event;

  e.preventDefault();
  let user = {
    username: document.getElementById("name").value,
    midname: document.getElementById("midname").value,
    phone: document.getElementById("phone").value,
    city: document.getElementById("city").value,
    mail: document.getElementById("mail").value,
    bfday: document.getElementById("bfday").value,
    login: document.getElementById("login").value,
    pass: document.getElementById("pass").value,
  }
console.log(user);
  if (checkAll() && ValidateEmail() && checkDate()) {
    
    fetch("https://httpbin.org/post", {
      method: "POST",
      type: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((user) => {
        console.log(user);
      })
      .catch((error) => console.log(error));
  }
  
}
