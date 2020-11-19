const requester = require('./requester');
const validator = require('./order-validator');

class Recurring {
    create = (data) => {
        const result = validator.validate(data, 'recurring');

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
                const path = 'recurring';
                resolve(requester.request('post', path, data));
            }
        });
    }

    retrieve = (invoiceId) => {
        const path = `recurring/R${invoiceId}`;
        return requester.request('get', path);
    }

    cancel = (invoiceId, data) => {
        const path = `recurring/cancel/R${invoiceId}`;
        return requester.request('put', path, data);
    }
}

module.exports.Recurring = Recurring;
