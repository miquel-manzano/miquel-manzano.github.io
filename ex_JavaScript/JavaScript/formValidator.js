const form = document.getElementById('MyForm');


// Funcion Principal

form.addEventListener('submit', function(event) {

    // Variables Email
    let emailField = document.getElementById('mail');
    const EmailTitle = document.getElementById('MailTitle');
    const CorrectEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


    // Variables Name

    let nameField = document.getElementById('name');
    const NameTitle = document.getElementById('NameTitle');


    // Variables Title

    let titleField = document.getElementById('title');
    const TitleTitle = document.getElementById('TitleTitle');


    // variables Message

    let messageField = document.getElementById('msg');
    const messageTitle = document.getElementById('messageTitle');


    // Validacion

    event.preventDefault();
    const isEmailCorrect = EmailCorrect(emailField, EmailTitle, CorrectEmail);
    const isNameCorrect = TextNotNull(nameField, NameTitle, 1);
    const isTitleCorrect = TextNotNull(titleField, TitleTitle, 2);
    const isMessageCorrect = TextNotNull(messageField, messageTitle, 2);


    // Submit
    
    submitForm(isEmailCorrect, isNameCorrect, isTitleCorrect, isMessageCorrect);

});


// Funcion Submit

function submitForm(isEmailCorrect, isNameCorrect, isTitleCorrect, isMessageCorrect)
{
    if (isEmailCorrect && isNameCorrect && isTitleCorrect && isMessageCorrect)
    {
        console.log("Form Valid");
        form.submit();
    }
    else
    {
        console.log("Form Invalid");
    }
}


// Funciones de Validacion

function EmailCorrect(emailField, EmailTitle, CorrectEmail)
{
    if (CorrectEmail.test(emailField.value))
    {
        console.log('CorrectEmail');
        EmailTitle.style.color = 'black';
        return true;
    }
    else 
    {
        console.log('IncorrectEmail');
        EmailTitle.style.color = 'red';
        return false;
    }
}

function TextNotNull(Field, Title, MinCharacters)
{
    if (Field.value.trim().length > MinCharacters)
    {
        console.log(Field.value, 'isCorrect');
        Title.style.color = 'black';
        return true;
    }
    else
    {
        console.log(Field.value, 'isIncorrect');
        Title.style.color = 'red';
        return false;
    }
}