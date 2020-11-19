const expect = require('chai').expect;
const nock = require('nock');

const PortWallet = require('../index');
const validator = require('../src/order-validator');
const portPay = new PortWallet('12345', '32987');

const response = require('./recurring/response');
const cancelResponse = require('./recurring/cancel-response');
const payload = require('./payload');

const invoiceId = '85FB4E14C1D9BC53';
const baseUrl = 'https://api-sandbox.portwallet.com/payment/v2/';

describe('Recurring Service', () => {
    beforeEach(() => {
        nock(baseUrl)
            .get(`/recurring/R${invoiceId}`)
            .reply(200, response);

        nock(baseUrl)
            .post('/recurring')
            .reply(200, response);

        nock(baseUrl)
            .put(`/recurring/cancel/R${invoiceId}`)
            .reply(200, cancelResponse);
    });

    describe('Validate Recurring', () => {
        it('should validate recurring', () => {
            const recurringData = {
                ...payload.data,
                recurring: payload.recurring
            }
            const result = validator.validate(recurringData);
            expect(result.value, recurringData);
        });
    });

    describe('Recurring Operations', function () {
        it('should create a recurring', function () {
            const recurringPayload = {
                ...payload.data,
                recurring: payload.recurring
            }
            return portPay.recurring.create(recurringPayload)
                .then(response => {
                    //expect an object back
                    expect(typeof response).to.equal('object');

                    //Test result of invoice id for the response
                    expect(response.recurring.id).to.equal(`R${invoiceId}`);
                });
        });

        it(`should retrieve a recurring`, function () {
            return portPay.recurring.retrieve(invoiceId)
                .then(response => {
                    //expect an object back
                    expect(typeof response).to.equal('object');

                    //Test result of invoice id for the response
                    expect(response.recurring.id).to.equal(`R${invoiceId}`);
                });
        });

        it(`should cancel a recurring`, function () {
            return portPay.recurring.cancel(invoiceId)
                .then(response => {
                    //expect an object back
                    expect(typeof response).to.equal('object');

                    //Test result of invoice id for the response
                    expect(response.id).to.equal(cancelResponse.data.id);
                });
        });
    });
})
