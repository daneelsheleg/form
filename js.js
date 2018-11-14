document.addEventListener('DOMContentLoaded', function (params) {
    var massEror = [];
    var passwordElem = document.querySelector('#password');
    var configElem = document.querySelector('#config');
    var submitElem = document.querySelector('#submit'); 
    var emailElem = document.querySelector('#email');
    var nameElem = document.querySelector('#name');
    var oneElem = document.querySelector('#one');
   
       
    function isFieddFill(nameElem) {
        return (nameElem.getAttribute('required'))
            nameElem.value.length > 0;
    };
   

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
                massEror.push('Заполните правильно!!!');
             } 
            };
            if (emailElem.hasAttribute('pattern')) {
                var pattern = emailElem.getAttribute('pattern');
                 var reg = new RegExp(pattern);
                 if (!reg.test(emailElem.value)){
                    massEror.push('Заполните правильно!!!');
                 } 
                };
                if ( passwordElem.hasAttribute('pattern')) {
                    var pattern =  passwordElem.getAttribute('pattern');
                     var reg = new RegExp(pattern);
                     if (!reg.test(passwordElem.value)){
                        massEror.push('Заполните правильно!!!');
                     } 
                    }
                    

        console.log(massEror);
    });




});
