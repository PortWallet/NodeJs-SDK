const axios = require('./axios');

function request(method, path, data = {}, params = {}) {

    return new Promise((resolve, reject) => {
        axios.instance[method](path, data)
            .then(response => {
                resolve(response.data.data);
            })
            .catch(error => {
                reject(error.response.data);
            });
    });
}

module.exports.request = request;
