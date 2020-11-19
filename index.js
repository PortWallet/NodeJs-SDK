const invoice = require('./src/invoice');
const recurring = require('./src/recurring');
const moment = require('moment');
const CryptoJS = require("crypto-js");
const axios = require('./src/axios');

class PortWallet {
    constructor(appKey, secretKey, mode = 'sandbox') {
        if (!appKey || !secretKey) {
            throw new Error('Please provide both appKey and secretKey')
        }

        this.setToken(appKey, secretKey);

        return this.init(mode);
    }

    setToken(appKey, secretKey) {
        const Token = appKey + ":" + (CryptoJS.MD5(secretKey + (moment().unix())).toString());

        const wordArray = CryptoJS.enc.Utf8.parse(Token);
        const base64 = CryptoJS.enc.Base64.stringify(wordArray);
        axios.instance.defaults.headers.common['Authorization'] = `Bearer ${base64}`;
    }

    init(mode) {

        axios.instance.defaults.baseURL = 'https://api-sandbox.portwallet.com/payment/v2/';

        if (mode.toLowerCase() === 'live') {
            axios.instance.defaults.baseURL = 'https://api.portwallet.com/payment/v2/';
        }

        const target = {
            invoice: new invoice.Invoice(),
            recurring: new recurring.Recurring()
        };

        const handler = {
            get: (target, prop, receiver) => {
                if (!target[prop]) {
                    throw new Error(`No service available named ${prop}.`);
                }

                return new Proxy(target[prop], {});
            }
        };

        return new Proxy(target, handler);
    }
}

module.exports = PortWallet;
