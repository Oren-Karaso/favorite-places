'use strict'

function init() {
    var user = loadFromStorage(STORAGE_KEY);
    if (user) {
        document.querySelector('body').style.backgroundColor = user.color;
        console.log('Welcome back:', user.name + ' !');
    }
    _saveUserToStorage();
}


