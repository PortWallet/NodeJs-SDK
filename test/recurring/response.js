module.exports = {
    data: {
        "invoice_id": "85FB4E14C1D9BC53",
        "reference": null,
        "order": {
            "amount": "12.00",
            "currency": "BDT",
            "type": "purchase",
            "has_emi": 0,
            "discount_availed": 0,
            "redirect_url": "https://google.com",
            "created_at": "Wed, 18 Nov 2020 14:54:36 +0600",
            "status": "PENDING",
            "is_recurring_payment": 0
        },
        "product": {
            "name": "Recurring 1",
            "description": "iPhone 12"
        },
        "billing": {
            "customer": {
                "name": "Sujan Mahmud",
                "email": "sujancseruet@gmail.com",
                "phone": "01717451349",
                "address": {
                    "street": "Dhaka",
                    "city": "Dhaka",
                    "state": "Dhaka",
                    "zipcode": "1212",
                    "country": "Bangladesh"
                }
            }
        },
        "shipping": {
            "customer": {
                "name": "Firoz Mahmud",
                "email": "firoz@gmail.com",
                "phone": "01717451349",
                "address": {
                    "street": "Dhaka",
                    "city": "Dhaka",
                    "state": "Dhaka",
                    "zipcode": "1212",
                    "country": "Bangladesh"
                }
            }
        },
        "action": {
            "type": "redirect",
            "url": "https://payment-sandbox.portwallet.com/payment/?invoice=85FB4E14C1D9BC53",
            "payload": null,
            "method": "GET"
        },
        "customs": [
            {
                "recurringId": "R85FB4E14C1D9BC53"
            }
        ],
        "recurring": {
            "id": "R85FB4E14C1D9BC53",
            "status": "PENDING",
            "name": "Recurring 1",
            "description": "iPhone 12",
            "period": {
                "interval": 1,
                "unit": "monthly"
            },
            "has_trial": false,
            "trial": {
                "started": null,
                "ended": null,
                "amount": null,
                "availed": null
            },
            "has_offers": false,
            "offers": {
                "amount": null,
                "applicable_for": null,
                "availed_already": null
            },
            "is_prorated": true,
            "payment": {
                "amount": 30,
                "currency": "BDT",
                "total": 6,
                "applied": 0,
                "left": 6
            },
            "started": "Wed, 18 Nov 2020 14:54:36 +0600",
            "ended_at": "Fri, 30 Apr 2021 23:59:59 +0600",
            "next_payment": {
                "date": "Tue, 01 Dec 2020 00:00:00 +0600",
                "amount": 30,
                "num_of_day_left": 12
            },
            "customer": {
                "name": "Sujan Mahmud",
                "email": "sujancseruet@gmail.com",
                "phone": "01717451349"
            },
            "user_id": 0,
            "source": {
                "id": null,
                "type": null,
                "number": null,
                "brand": null
            }
        }
    }
}
