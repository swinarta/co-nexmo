var request = require('co-request');

var NEXMO_URL = 'https://rest.nexmo.com';

module.exports = Nexmo;

function Nexmo(opts) {
    if (!(this instanceof Nexmo)) return new Nexmo(opts);

    this.key = opts.key;
    this.secret = opts.secret;

    this.getBalance = function *() {
        var options = {
            url: NEXMO_URL + '/account/get-balance',
            qs: {
                api_key: this.key,
                api_secret: this.secret
            }
        };
        var result = yield request(options);
        return JSON.parse(result.body);
    };

    this.searchMessages = function *(date, mobileNumber) {
        var options = {
            url: NEXMO_URL + '/search/messages',
            qs: {
                api_key: this.key,
                api_secret: this.secret,
                date: date,
                to: mobileNumber
            }
        };
        var result = yield request(options);
        return JSON.parse(result.body);
    };

    this.sendTextShortCode = function *(mobileNumber, pin){
        var options = {
            url: NEXMO_URL + '/sc/us/2fa/json',
            qs: {
                api_key: this.key,
                api_secret: this.secret,
                to: mobileNumber,
                pin: pin
            }
        };

        yield request.get(options);
    };

    this.sendTextMessage = function *(fromNumber, toMobileNumber, text){
        var options = {
            url: NEXMO_URL + '/sms/json',
            qs: {
                api_key: this.key,
                api_secret: this.secret,
                from: fromNumber,
                to: toMobileNumber,
                text: text
            }
        };
        yield request.get(options);
    };

}