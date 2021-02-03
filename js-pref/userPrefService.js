'use strict'

const STORAGE_KEY = 'bestPlaces';
var gUser;
// var gCurrUser;
var gAstology = ['Next week, beware of falling pianos', 
'A special ghost will haunt you in the next few weeks. Stay open for exciting opportunities', 
'Tomorrow you will not wake up in time, no use for snoozing alarms'];

function makeUsers() {                          //originally designed for multiple users in an array
    gUser = loadFromStorage(STORAGE_KEY);

    if (!gUser) gUser = null;

}

function createUser(name, color, birthDay, email) {
    var user = {
        name: name,
        color: color,
        email: email,
        birthday: birthDay,
    }

    gUser = user;
    _saveUserToStorage();
}

function _saveUserToStorage() {
    saveToStorage(STORAGE_KEY, gUser);
}

function getRndmAstro() {
    return gAstology[getRandomInt(0, gAstology.length-1)];
}



// function getUserByName(name) {
//     return gUsers.find(user => user.name === name);
// }

// function updateCurrUser(user) {
//     gCurrUser = user;
// }