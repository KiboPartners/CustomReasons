/**
 * Implementation for embedded.commerce.payments.action.after

 * This custom function will receive the following context object:
{
  "exec": {
    "setActionAmount": {
      "parameters": [
        {
          "name": "amount",
          "type": "number"
        }
      ],
      "return": {
        "type": "mozu.commerceRuntime.contracts.payments.paymentAction"
      }
    },
    "setFailedStateName": {
      "parameters": [
        {
          "name": "stateName",
          "type": "string"
        }
      ]
    },
    "setSuccessFlag": {
      "parameters": [
        {
          "name": "isSuccess",
          "type": "bool"
        }
      ]
    },
    "setNewStateName": {
      "parameters": [
        {
          "name": "stateName",
          "type": "string"
        }
      ]
    },
    "setPaymentData": {
      "parameters": [
        {
          "name": "key",
          "type": "string"
        },
        {
          "name": "value",
          "type": "object"
        }
      ]
    },
    "removePaymentData": {
      "parameters": [
        {
          "name": "key",
          "type": "string"
        }
      ]
    },
    "setRetryFlag": {
      "parameters": [
        {
          "name": "shouldRetry",
          "type": "bool"
        }
      ]
    },
    "setActionPreAuthFlag": {
      "parameters": [
        {
          "name": "isPreAuth",
          "type": "bool"
        }
      ]
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