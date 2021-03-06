function onInit() {
    makeUsers();
}

function onSave(ev) {
    ev.preventDefault();

    var eluserName = document.querySelector('input[name=user-name]').value;
    var eluserColor = document.querySelector('input[name=user-color]').value;
    var eluserBirthDay = document.querySelector('input[name=user-birthday]').value;
    var elEmail = document.querySelector('input[name=user-email]').value;

    var userName = eluserName;  // maybe exess of variables?
    var userColor = eluserColor;
    var birthDay = eluserBirthDay;
    var email = elEmail;
    
    // var age = elAge;

    if (!gUser) createUser(userName, userColor, birthDay, email);
    else console.log('welcome back', userName + '!');

    if (birthDay) {
        var elModal = document.querySelector('.astrology');
        var elModalTxt = document.querySelector('.astrology h4');
        elModalTxt.innerText = getRndmAstro();
        elModal.style.visibility = 'visible';
        setTimeout(() => { elModal.style.visibility = 'hidden' }, 5000);
    }
}

function showAge(newVal) {
    document.querySelector('.pref-form span').innerHTML = newVal;
}
