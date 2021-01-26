/* global require, module */

var exec = require('cordova/exec'),
    argscheck = require('cordova/argscheck'),
    cordova = require('cordova');

var SERVICE_NAME = 'MoveTaskToBack';

function executeForDeferred(method, args) {
    return new Promise((resolve, reject) => {
        exec(
            function(result) {
                resolve(result);
            },
            function(reason) {
                reject(reason);
            },
            SERVICE_NAME, method, args
        );
    });
}

function moveTaskToBack() {
    argscheck.checkArgs('', SERVICE_NAME + ' moveTaskToBack', arguments);

    if (cordova.platformId.toLowerCase() !== 'android') {
        return Promise.reject('not supported on platform ' + cordova.platformId);
    }

    return executeForDeferred('moveTaskToBack', []);
}


module.exports = {
    moveTaskToBack: moveTaskToBack
};
