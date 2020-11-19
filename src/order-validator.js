const Joi = require('joi');

function validate(data, service = 'invoice') {
    const urlRegex = /^(http(s)?:\/\/)?(www\.)?([-a-z0-9]{1,63}\.)*?[a-z0-9][-a-z0-9]{0,61}[a-z0-9]\.[a-z]{2,6}(\/[-\w@\+\.~#\?&/=%]*)?$/;

    const orderSchema = Joi.object()
        .keys({
            amount: Joi.number()
                .min(0.1)
                .max(99999999)
                .required(),

            currency: Joi.any()
                .valid(...["BDT", "USD", "GBP", "EUR"])
                .required(),

            redirect_url: Joi.string()
                .min(10)
                .max(200)
                .pattern(urlRegex)
                .required(),

            ipn_url: Joi.string()
                .min(10)
                .max(200)
                .pattern(urlRegex),

            reference: Joi.string()
                .min(1)
                .max(100),

            validity: Joi.number()
                .min(60)
                .max(31536000),
        })
        .required();

    const productSchema = Joi.object()
        .keys({
            name: Joi.string()
                .min(3)
                .max(150),

            description: Joi.string()
                .min(3)
                .max(300)
        })
        .required();

    const billingAndShipping = Joi.object()
        .keys({
            customer: Joi.object({
                name: Joi.string()
                    .min(2)
                    .max(50)
                    .required(),

                email: Joi.string()
                    .email()
                    .min(3)
                    .max(50)
                    .required(),

                phone: Joi.string()
                    .min(9)
                    .max(15)
                    .pattern(/^[0-9 +]+$/)
                    .required(),

                address: Joi.object()
                    .keys({
                        street: Joi.string()
                            .min(2)
                            .max(200)
                            .required(),

                        city: Joi.string()
                            .min(2)
                            .max(200)
                            .required(),

                        state: Joi.string()
                            .min(2)
                            .max(50)
                            .required(),

                        zipcode: Joi.string()
                            .min(3)
                            .max(8)
                            .required(),

                        country: Joi.string()
                            .min(2)
                            .max(3)
                            .uppercase()
                            .required()
                    })
            })
        })
        .required();

    const discountSchema = Joi.object()
        .keys({
            enable: Joi.boolean(),
            codes: Joi.array()
                .min(1)
                .max(100)
        });

    const emiSchema = Joi.object()
        .keys({
            enable: Joi.boolean(),
            tenures: Joi.array()
                .min(0)
                .max(60)
        });

    const recurringSchema = Joi.object()
        .keys({
            period: {
                unit: Joi.any()
                    .valid(...['weekly', 'monthly', 'quarterly', 'half-yearly', 'yearly'])
                    .required(),
                prorated: Joi.boolean()
                    .required()
            },
            number_of_payment: Joi.number()
                .integer()
                .required()
        })
        .required();

    let order = {
        order: orderSchema,
        product: productSchema,
        billing: billingAndShipping,
        shipping: billingAndShipping,
        discount: discountSchema,
        emi: emiSchema
    }

    if (service === 'recurring') {
        order = {
            ...order,
            recurring: recurringSchema
        }
    }

    const validatorSchema = Joi.object(order);

    return validatorSchema.validate(data);
}

module.exports.validate = validate;
