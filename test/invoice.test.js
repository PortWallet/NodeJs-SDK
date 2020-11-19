const expect = require('chai').expect;
const nock = require('nock');

const PortWallet = require('../index');
const validator = require('../src/order-validator');
const portPay = new PortWallet('12345', '32987');

const response = require('./invoice/response');
const payload = require('./payload');

const invoiceId = '85F17BD5F6739B46';
const amount = 29;
const baseUrl = 'https://api-sandbox.portwallet.com/payment/v2/';

describe('Invoice Service', () => {
    beforeEach(() => {
        nock(baseUrl)
            .get(`/invoice/${invoiceId}`)
            .reply(200, response);

        nock(baseUrl)
            .post('/invoice')
            .reply(200, response);

        nock(baseUrl)
            .get(`/invoice/ipn/${invoiceId}/${amount}`)
            .reply(200, response);
    });

    describe('Validate Order', () => {
        it('should validate order', () => {
            const result = validator.validate(payload.data);
            expect(result.value, payload.data);
        });

        it('should validate order with discount', () => {
            const discountPayload = {
                ...payload.data,
                discount: payload.discount
            }
            const result = validator.validate(discountPayload);
            expect(result.value, discountPayload);
        });

        it('should validate order with emi', () => {
            const emiPayload = {
                ...payload.data,
                emi: payload.emi
            }
            const result = validator.validate(emiPayload);
            expect(result.value, emiPayload);
        });
    });

    describe('Order Operations', function () {
        describe('Create Order', () => {
            it('should create an invoice', function () {
                return portPay.invoice.create(payload.data)
                    .then(response => {
                        //expect an object back
                        expect(typeof response).to.equal('object');

                        //Test result of invoice id for the response
                        expect(response.invoice_id).to.equal(invoiceId);
                    });
            });

            it('should create an invoice with discount', function () {
                const discountData = {
                    ...payload.data,
                    discount: payload.discount
                }
                return portPay.invoice.create(discountData)
                    .then(response => {
                        //expect an object back
                        expect(typeof response).to.equal('object');

                        //Test result of invoice id for the response
                        expect(response.invoice_id).to.equal(invoiceId);
                    });
            });

            it('should create an invoice with emi', function () {
                const emiData = {
                    ...payload.data,
                    emi: payload.emi
                }
                return portPay.invoice.create(emiData)
                    .then(response => {
                        //expect an object back
                        expect(typeof response).to.equal('object');

                        //Test result of invoice id for the response
                        expect(response.invoice_id).to.equal(invoiceId);
                    });
            });
        });

        describe('Retrieve Order', () => {
            it(`should get an invoice`, function () {
                return portPay.invoice.retrieve(invoiceId)
                    .then(response => {
                        //expect an object back
                        expect(typeof response).to.equal('object');

                        //Test result of invoice id for the response
                        expect(response.invoice_id).to.equal(invoiceId);
                    });
            });
        });

        describe('IPN Validate', () => {
            it('should validate ipn', function () {
                return portPay.invoice.ipnValidate(invoiceId, amount)
                    .then(response => {
                        //expect an object back
                        expect(typeof response).to.equal('object');

                        //Test result of invoice id for the response
                        expect(response.invoice_id).to.equal(invoiceId);
                    });
            });
        });
    });
})
