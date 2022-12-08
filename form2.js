
let button = document.getElementById('click');
let inputReq = document.querySelectorAll('input[required]');
inputReq.onfocus = function() {
    if(this.value== ''){this.value=''}; return false;
}
button.addEventListener("click", function(event) {
   
    event.preventDefault();
    let user = {
        username: document.getElementById ('name').value,
        midname: document.getElementById ('midname').value,
        phone: document.getElementById ('phone').value,
        city: document.getElementById ('city').value,
        mail: document.getElementById ('mail').value,
        bfday: document.getElementById ('bfday').value,
        login: document.getElementById ('login').value,
        pass: document.getElementById ('pass').value
    }
    console.log(user);
    fetch('https://httpbin.org/post',{
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
    })
    .then(response=>response.json())
    .then(user => {
        console.log(user);
    })
.catch(error => console.log(error));

    });
   

    
    
    

