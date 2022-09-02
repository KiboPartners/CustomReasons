/**
 * Implementation for embedded.commerce.payments.action.performPaymentInteraction

 * This custom function will receive the following context object:
{
  "exec": {
    "addPaymentInteraction": {
      "parameters": [
        {
          "name": "paymentInteraction",
          "type": "string"
        }
      ],
      "return": {
        "type": "mozu.commerceRuntime.contracts.payments.paymentInteraction"
      }
    },
    "setPaymentAmountRequested": {
      "parameters": [
        {
          "name": "amount",
          "type": "number"
        }
      ],
      "return": {
        "type": "mozu.commerceRuntime.contracts.payments.payment"
      }
    },
    "setPaymentAmountCollected": {
      "parameters": [
        {
          "name": "amount",
          "type": "number"
        }
      ],
      "return": {
        "type": "mozu.commerceRuntime.contracts.payments.payment"
      }
    },
    "setPaymentAmountCredited": {
      "parameters": [
        {
          "name": "amount",
          "type": "number"
        }
      ],
      "return": {
        "type": "mozu.commerceRuntime.contracts.payments.payment"
      }
    }
  },
  "get": {
    "payment": {
      "parameters": [],
      "return": {
        "type": "mozu.commerceRuntime.contracts.payments.payment"
      }
    },
    "paymentAction": {
      "parameters": [],
      "return": {
        "type": "mozu.commerceRuntime.contracts.payments.paymentAction"
      }
    }
  }
}


 */

module.exports = function(context, callback) {
  callback();
};