let form = document.querySelector('.form');
let username = document.getElementById ('name');
let phone = document.getElementById ('phone')
let midname = document.getElementById ('midname');
let city = document.getElementById ('city');
let mail = document.getElementById ('mail');
let bfday = document.getElementById ('bfday');
let login = document.getElementById ('login');
let pass = document.getElementById ('pass');
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
 if (inputs.values!= ''){
    e.preventDefault();
 }
function check () {
//document.getElementById ('error').innerHTML="";
if (username.value == '') {
    return true;
}
if (city.value == '') {
    return true;
}
if (midname == '') {
    return true;
}  
if (mail.value == '') {
    return true;
}        
if (bfday.value  == '') {
    return true;
} 
if (login.value  == '') {
    return true;
    } 
    if (pass.value  == '') {
        return true;
        } 
        
} 

}
CustomValidation.prototype.getInvaliditiesForHTML = function() {
    return this.invalidities.join('. <br>');
  }
  
  // Добавляем обработчик клика на кнопку отправки формы
  form.onsubmit = function(e) {
    // Пройдёмся по всем полям
    let inputs=document.querySelectorAll("input[required]");
    for (var i = 0; i < inputs.length; i++) {
  
      var input = inputs[i];
  
      // Проверим валидность поля, используя встроенную в JavaScript функцию checkValidity()
      if (input.checkValidity() == false) {
  
        var inputCustomValidation = new CustomValidation(); // Создадим объект CustomValidation
        inputCustomValidation.checkValidity(input); // Выявим ошибки
        var customValidityMessage = inputCustomValidation.getInvalidities(); // Получим все сообщения об ошибках
        input.setCustomValidity(customValidityMessage); // Установим специальное сообщение об ошибке
  
        // Добавим ошибки в документ
        var customValidityMessageForHTML = inputCustomValidation.getInvaliditiesForHTML();
        input.insertAdjacentHTML('afterend', '<p class="error-message">' + customValidityMessageForHTML + '</p>')
        stopSubmit = true;
  
      } // закончился if
    } // закончился цикл
  
    if (stopSubmit) {
      e.preventDefault();
    }
  }



function ValidateEmail(mail) {
    let mailFormat = "[a-z0-9._%+-]+@[ a-z0-9.-]+.[a-z]{2,}$";
    if (mail.value.match(mailFormat)) {
        return true;
    }
    else {
        
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
    ;
    return false;
}
}
