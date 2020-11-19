const requester = require('./requester');
const validator = require('./order-validator');

class Invoice {
    create = (data) => {
        const result = validator.validate(data);

        return new Promise((resolve, reject) => {
            if (result.error) {
                const details = result.error.details[0];
                const errors = {
                    error: {
                        cause: details.type,
                        explanation: details.message,
                        property: details.context.key
                    },
                    result: "ERROR"
                }
                reject(errors);
            } else {
                const path = 'invoice';
                resolve(requester.request('post', path, data));
            }
        });
    }

    retrieve = (invoiceId) => {
        const path = `invoice/${invoiceId}`;
        return requester.request('get', path);
    }

    ipnValidate = (invoiceId, amount) => {
        const path = `invoice/ipn/${invoiceId}/${amount}`;
        return requester.request('get', path);
    }

    refund = (invoiceId, data) => {
        const path = `invoice/refund/${invoiceId}`;
        return requester.request('post', path, data);
    }
}

module.exports.Invoice = Invoice;
