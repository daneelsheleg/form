document.addEventListener('DOMContentLoaded', function (params) {
    var massEror = [];
    var passwordElem = document.querySelector('#password');
    var configElem = document.querySelector('#config');
    var submitElem = document.querySelector('#submit'); 
    var emailElem = document.querySelector('#email');
    var nameElem = document.querySelector('#name');
    var oneElem = document.querySelector('#one');
       

function isFieldFill(input) {
    return ((input.hasAttribute('required')) && (input.value.length>0));
}

    submitElem.addEventListener('click', function (event) {
        event.preventDefault();
        massEror = [];

        if (passwordElem.value !== configElem.value){
            massEror.push('пароли не совпадают');
        };
        if (nameElem.hasAttribute('pattern')) {
            var pattern = nameElem.getAttribute('pattern');
             var reg = new RegExp(pattern);
             if (!reg.test(nameElem.value)){
                massEror.push('Заполните правильно - ИМЯ !!!');
             } 
            };
            if (emailElem.hasAttribute('pattern')) {
                var pattern = emailElem.getAttribute('pattern');
                 var reg = new RegExp(pattern);
                 if (!reg.test(emailElem.value)){
                    massEror.push('Заполните правильно - EMAIL !!!');
                 } 
                };
                if ( passwordElem.hasAttribute('pattern')) {
                    var pattern =  passwordElem.getAttribute('pattern');
                     var reg = new RegExp(pattern);
                     if (!reg.test(passwordElem.value)){
                        massEror.push('Заполните правильно - ПАРОЛЬ!!!');
                     } 
                    }
        console.log(massEror);
    });
    
   
     var div = document.createElement('div');
    
      submitElem.addEventListener('click', function () { 
         div.innerText = '';
             for(  var i = 0;  i <  massEror.length; i++){
              
                 var p = document.createElement('p');
              
                div.appendChild(p);
                p.innerText = massEror[i];
                div.style = 'justify-content:center'
                 p.style = 'text-align:center; color:white';
                
            }
    })
      document.body.appendChild(div);

       submitElem.addEventListener('click', function () { 

          if ( emailElem.value == 0){
             var color = document.querySelector('#color');
                color.style = 'color:red';
        };
       });
});
