

var url = 'http:/mylogger.io/log';

function log(message) {
    //send  http request
    console.log("Message " + message);

}
module.exports.log = log;
