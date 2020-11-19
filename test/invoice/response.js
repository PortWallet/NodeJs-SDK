module.exports = {
    data: {
        "invoice_id": "85F17BD5F6739B46",
        "reference": null,
        "order": {
            "amount": "29.00",
            "currency": "BDT",
            "type": "purchase",
            "has_emi": 0,
            "discount_availed": 0,
            "redirect_url": "http://prestashop.local/module/portwallet/redirect",
            "created_at": "Wed, 22 Jul 2020 10:15:27 +0600",
            "status": "ACCEPTED",
            "is_recurring_payment": 0
        },
        "product": {
            "name": "Order Id: 17",
            "description": "Today is a good day Framed poster"
        },
        "billing": {
            "customer": {
                "name": "Sujan Mahmud",
                "email": "sujan.mahmud@portonics.com",
                "phone": "01799021432",
                "address": {
                    "street": "Dhaka",
                    "city": "Dhaka",
                    "state": "NA",
                    "zipcode": "1212",
                    "country": "Bangladesh"
                }
            },
            "payer": {
                "name": "Sujan Mahmud",
                "account": "411111xxxxxx1111",
                "ip_address": "134.209.101.255",
                "user_agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36/181"
            },
            "gateway": {
                "category": "card",
                "network": "visa",
                "status": "APPROVED",
                "approval_code": "686977",
                "reason": "APPROVED cardSecurityCode: MATCH 3DSecure: AUTHENTICATION_SUCCESSFUL "
            },
            "source": {
                "category": "card",
                "number": "411111xxxxxx1111",
                "brand": {
                    "name": "VISA",
                    "type": null,
                    "category": null
                },
                "issuer": {
                    "name": "JPMORGAN CHASE BANK, N.A.",
                    "phone": "+14169819200",
                    "website": "http://www.jpmorganchase.com",
                    "country": {
                        "name": "United States",
                        "iso2": "US",
                        "iso3": "USA"
                    }
                }
            }
        },
        "shipping": {
            "customer": {
                "name": null,
                "email": null,
                "phone": null,
                "address": {
                    "street": "",
                    "city": null,
                    "state": null,
                    "zipcode": null,
                    "country": "Bangladesh"
                }
            }
        },
        "transactions": [
            {
                "amount": "29.00",
                "currency": "BDT",
                "status": "ACCEPTED",
                "type": "purchase",
                "time": "Wed, 22 Jul 2020 10:15:59 +0600"
            },
            {
                "amount": "-1.75",
                "currency": "BDT",
                "status": "ACCEPTED",
                "type": "fee",
                "time": "Wed, 22 Jul 2020 10:15:59 +0600"
            }
        ],
        "customs": [
            {
                "order_id": "17"
            },
            {
                "card_hash": "5419e4536f07f66cab366349e6c276f860d9af87de697e2dd83281950f1cfccf"
            }
        ]
    }
}
