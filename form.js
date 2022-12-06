let button = document.getElementById('click');
let username = document.getElementById ('name');
let phone = document.getElementById ('phone')
let midname = document.getElementById ('midname');
let city = document.getElementById ('city');
let mail = document.getElementById ('mail');
let bfday = document.getElementById ('bfday');
let login = document.getElementById ('login');
let pass = document.getElementById ('password');
button.addEventListener("click", function() {
    checkAll();
    ValidateEmail(mail);
    checkDate(bfday);
  })

function checkAll(){
    let inputs=document.querySelectorAll("input[required]");
    for (let input of inputs){
        check(input);
    }

function check () {
document.getElementById ('error').innerHTML=" ";
if (username.value == '') {
document.getElementById ('error')
.innerHTML+= "Ваше имя ?<br>";
}
if (city.value == '') {
document.getElementById ('error').innerHTML+= "Город?<br>";
}
if (midname == '') {
document.getElementById ('error').innerHTML+= "Фамилия?<br>";
}  
if (mail.value == '') {
    document.getElementById ('error').innerHTML+= "Ваша почта?<br>";
}        
if (bfday.value  == '') {
document.getElementById ('error').innerHTML+= "Ваша дата рождения?<br>";
} 
if (login.value  == '') {
    document.getElementById ('error').innerHTML+= "Ваш логин?<br>";
    } 
    if (pass.value  == '') {
        document.getElementById ('error').innerHTML+= "Не помните пароль?<br>";
        } 

}
}

function ValidateEmail(mail) {
    let mailFormat = "[a-z0-9._%+-]+@[ a-z0-9.-]+.[a-z]{2,}$";
    if (mail.value.match(mailFormat)) {
        return true;
    }
    else {
        alert("Ваш адрес электронной почты введен неверно!");
        return false;
    }
}

function checkDate(bfday) {
var date_regex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
if (bfday.value.match(date_regex)) {
    /*alert("valid date");*/
    return true;
}
else {
    alert("Неправильный формат даты!");
    return false;
}
}
