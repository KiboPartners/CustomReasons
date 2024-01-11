# Custom Reasons API Extensions Code

This code allows easy customization of the following reason API extensions in Kibo:

* Refund reasons: [https://docs.kibocommerce.com/help/refund-reasons-after](https://docs.kibocommerce.com/help/refund-reasons-after)
* Order Cancellation Reason: [https://docs.kibocommerce.com/help/cancellation-reasons-after](https://docs.kibocommerce.com/help/cancellation-reasons-after)
* Subscription reasons: [https://docs.kibocommerce.com/help/subscription-reasons-after](https://docs.kibocommerce.com/help/subscription-reasons-after)
* Return reasons: [https://docs.kibocommerce.com/help/retrieve-reasons](https://docs.kibocommerce.com/help/retrieve-reasons)

If you just want to use this, all you need to do is install via [One Click Link](https://developer.mozu.com/console/marketplace/mzint.custom_reasons.1.0.0). After installing, go to your tenant, System → Customization → API Extensions, then modify the items. It will copy the default items for each reason at the time of installation to the Arc config. Simply modify the Action Management API Extensions Configuration, save, and you will see the reasons update.

This Arc.js code is implemented in TypeScript and can give you a feel for using TypeScript as a base for API Extensions.

## Order Cancellation Reason Configuration

By default, the reasons for order cancellation and shipment line items cancellation or transfer from Fulfiller are fed from the same source. There are `category` query parameters in the requests for cancellation reasons so additional lists can be provided based on this `category`, which correlates to shipping type.

An `items` array is required and any missing configuration fields will default to the provided `items` array. 

### Examples

With default configuration, the `items` array will supply all cancellation reasons. If no configuration is provided, Kibo defaults will be used.

```
"configuration": {
    "items": [
        {
            "reasonCode": "100",
            "name":"Arrived too late",
            "needsMoreInfo": false
        }
    ]
}

```

To enable a different set of reasons for order cancellation and line item cancellation, include the `items` array as well as arrays for the shipping options enabled on your site. This list will be available from Admin UI and Fulfiller UI.
```
"configuration": {
    "items": [
        {
            "reasonCode": "100",
            "name":"Arrived too late",
            "needsMoreInfo": false
        }
    ],
    "STH": [
        {
            "reasonCode": "STH-100",
            "name": "STH Cancellation reason",
            "needsMoreInfo": false
        }
    ]
}

```
To enable a different set of reasons for order cancellation, line item cancellation from the shipment in Admin UI, and cancellation/transfer reasons from Fulfiller UI at the `Validate Items in Stock` step, include the `FULFILLMENT_METHOD + '_FFUI'` array.
```
"configuration": {
    "items": [
        {
            "reasonCode": "100",
            "name":"Arrived too late",
            "needsMoreInfo": false
        }
    ],
    "STH": [
        {
            "reasonCode": "STH-100",
            "name": "STH Cancellation reason",
            "needsMoreInfo": false
        }
    ],
    "STH_FFUI": [
        {
            "reasonCode": "STH_FFUI-100",
            "name": "STH_FFUI Cancellation or Transfer reason",
            "needsMoreInfo": false
        }
    ]
}

```

### Categories/Shipping Methods

- STH = Ship to Home
- BOPIS = Buy Online Pickup In Store
- CSR = Customer Service
- FXCB = FedEx CrossBorder

### Config JSON
Sample of full config object
```
"configuration": {
    "items": [
        {
        "reasonCode": "testordercancellation",
        "name": "testOrderCancellation",
        "needsMoreInfo": false
        }
    ],
    "STH": [
        {
        "reasonCode": "STH_ADMIN",
        "name": "STH_ADMIN",
        "needsMoreInfo": false
        }
    ],
    "BOPIS": [
        {
        "reasonCode": "BOPIS_ADMIN",
        "name": "BOPIS_ADMIN",
        "needsMoreInfo": false
        }
    ],
    "CSR": [
        {
        "reasonCode": "CSR_ADMIN",
        "name": "CSR_ADMIN",
        "needsMoreInfo": false
        }
    ],
    "DELIVERY": [
        {
        "reasonCode": "DELIVERY_ADMIN",
        "name": "DELIVERY_ADMIN",
        "needsMoreInfo": false
        }
    ],
    "SHOPPER": [
        {
        "reasonCode": "SHOPPER_ADMIN",
        "name": "SHOPPER_ADMIN",
        "needsMoreInfo": false
        }
    ],
    "TRANSFER": [
        {
        "reasonCode": "TRANSFER_ADMIN",
        "name": "TRANSFER_ADMIN",
        "needsMoreInfo": false
        }
    ],
    "FXCB": [
        {
        "reasonCode": "FXCB_ADMIN",
        "name": "FXCB_ADMIN",
        "needsMoreInfo": false
        }
    ],
    "STH_FFUI": [
        {
        "reasonCode": "STH_FFUI",
        "name": "STH_FFUI",
        "needsMoreInfo": false
        }
    ],
    "BOPIS_FFUI": [
        {
        "reasonCode": "BOPIS_FFUI",
        "name": "BOPSI_FFUI",
        "needsMoreInfo": false
        }
    ],
    "CSR_FFUI": [
        {
        "reasonCode": "CSR_FFUI",
        "name": "CSR_FFUI",
        "needsMoreInfo": false
        }
    ],
    "DELIVERY_FFUI": [
        {
        "reasonCode": "DELIVERY_FFUI",
        "name": "DELIVERY_FFUI",
        "needsMoreInfo": false
        }
    ],
    "SHOPPER_FFUI": [
        {
        "reasonCode": "SHOPPER_FFUI",
        "name": "SHOPPER_FFUI",
        "needsMoreInfo": false
        }
    ],
    "TRANSFER_FFUI": [
        {
        "reasonCode": "TRANSFER_FFUI",
        "name": "TRANSFER_FFUI",
        "needsMoreInfo": false
        }
    ],
    "FXCB_FFUI": [
        {
        "reasonCode": "FXCB_FFUI",
        "name": "FXCB_FFUI",
        "needsMoreInfo": false
        }
    ]   
}

```

