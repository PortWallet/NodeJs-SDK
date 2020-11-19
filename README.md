## PortWallet Node.js SDK APIv2

### Installation
```
npm install portwallet
```
or 
```
yarn add portwallet
```

### Usage
This guideline will follow [PortWallet Payment GateWay v2.0](http://developer.portwallet.com/documentation-v2.php)
```
const PortWallet = require('portwallet');
const portPay = new PortWallet(appKey, secretKey, mode);
```

Here `mode` could be `sandbox` or `live`

#### Create an invoice
```
portPay.invoice.create(data);
```  

Here `data` is
```
{
    order: {
        amount: 1500.00,
        currency: 'BDT',
        redirect_url: 'https://example.com',
        ipn_url: 'https://example.com'
    },
    product: {
        name: 'Wallet',
        description: 'Leather Wallet'
    },
    billing: {
        customer: {
            name: 'John Doe',
            email: 'john@example.com',
            phone: '01*********',
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
            name: 'Jane Doe',
            email: 'jane@example.com',
            phone: '01*********',
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
```

#### IPN validate
// we will send you a http post request to your IPN url with `invoiceId` and `amount`

```
port.recurring.ipnValidate(invoiceId, amount)
    .then(result => {
        // do something with result
    })
    .catch(error => {
        // do something with error
    });
```

#### Make a refund request
```
const data = {
    refund:
        {
            'amount' => 50.00,
            'reference'=>'Refund'
        },
    };

portPay.invoice.refund(invoiceId, data)
    .then(result => {
        // do something with result
    })
    .catch(error => {
        // do something with error
    });
```

#### Retrieve an invoice
```
portPay.invoice.retrieve(invoiceId)
    .then(result => {
        // do something with result
    })
    .catch(error => {
        // do something with error
    });
```


#### Create a recurring
```
const data = {
     order: {
         amount: 1500.00,
         currency: 'BDT',
         redirect_url: 'https://example.com',
         ipn_url: 'https://example.com'
     },
     product: {
         name: 'Wallet',
         description: 'Leather Wallet'
     },
     billing: {
         customer: {
             name: 'John Doe',
             email: 'john@example.com',
             phone: '01*********',
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
             name: 'Jane Doe',
             email: 'jane@example.com',
             phone: '01*********',
             address: {
                 street: 'Dhaka',
                 city: 'Dhaka',
                 state: 'Dhaka',
                 zipcode: '1212',
                 country: 'BD'
             }
         }
     },
    recurring: {
        period: {
            unit: 'monthly',
            prorated: true
        },
        number_of_payment: 6
    }
};

portPay.recurring.create(data)
    .then(result => {
        // do something with result
    })
    .catch(error => {
        // do something with error
    });
```

#### Retrieve a recurring
```
portPay.recurring.retrieve(invoiceId)
    .then(result => {
        // do something with result
    })
    .catch(error => {
        // do something with error
    });
}
```

#### Cancel a recurring
```
portPay.recurring.cancel(invoiceId, data)
    .then(result => {
        // do something with result
    })
    .catch(error => {
        // do something with error
    });
}
```

#### Tests
For test simply run
```
npm run test
```
