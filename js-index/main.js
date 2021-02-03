'use strict'
const STORAGE_KEY = 'bestPlaces';


function init() {
    var user = loadFromStorage(STORAGE_KEY);
    if (user) {
        document.querySelector('body').style.backgroundColor = user.color;
        console.log('Done changing color');
    }

}







function loadFromStorage(key) {
    var json = localStorage.getItem(key);
    var value = JSON.parse(json);
    return value;
}
function saveToStorage(key, value) {
    var json = JSON.stringify(value);
    localStorage.setItem(key, json);
}

