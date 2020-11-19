module.exports.data = {
    order: {
        amount: 30,
        currency: 'BDT',
        redirect_url: 'https://google.com',
        ipn_url: 'https://google.com'
    },
    product: {
        name: 'Recurring',
        description: 'iPhone 12'
    },
    billing: {
        customer: {
            name: 'Sujan Mahmud',
            email: 'sujancseruet@gmail.com',
            phone: '01717451349',
            address: {
                street: 'Dhaka',
                city: 'Dhaka',
                state: 'Dhaka',
                zipcode: '1212',
                country: 'BD'
            }
        }
    },
    shipping: {
        customer: {
            name: 'Firoz Mahmud',
            email: 'firoz@gmail.com',
            phone: '01717451349',
            address: {
                street: 'Dhaka',
                city: 'Dhaka',
                state: 'Dhaka',
                zipcode: '1212',
                country: 'BD'
            }
        }
    }
}

module.exports.discount = {
    enable: true,
    codes: ['COUPON']
}

module.exports.emi = {
    enable: true,
    tenures: []
}

module.exports.recurring = {
    period: {
        unit: 'monthly',
        prorated: true
    },
    number_of_payment: 6
}
