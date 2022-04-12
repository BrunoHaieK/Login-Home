const init = () => {
    const validateEmail = (event) => {
    const regex = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'* +/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]| \\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a -z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[ 0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2 [0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01 -\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$    
    const emailTest = regex.test(input.value);

    if(!emailTest) {
        submitButton.setAttribute('disabled', 'disabled');
        input.nextElementSibling.classList.add('error');
    } else {
        submitButton.removeAttribute('disabled');
        input.nextElementSibling.classList.remove('error');

       }
    }

    const validatePassword = (event) => {
        const input = event.currentTarget;

        if(input.value.length < 8) {
            submitButton.setAttribute("disabled", "disabled");
            input.nextElementSibling.classList.add('error');
        } else {
            submitButton.removeAttribute("disabled");
            input.nextElementSibling.classList.remove('error');
        }
    }


    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('.login__submit');
    
    inputEmail.addEventListener('input', validateEmail);

    if(submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();

            fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: inputEmail.ariaValueMax,
                    password: inputPassword.ariaValue,
                })
            }).then ((response) => {
                return response.json();
            }).then((data) => {
                console.log(data)
            })
        })    
    }
}

window.onload = init;