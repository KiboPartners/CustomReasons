(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.index = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = {
  
  'embedded.commerce.payments.action.performPaymentInteraction': {
      actionName: 'embedded.commerce.payments.action.performPaymentInteraction',
      customFunction: require('./domains/commerce.payments/embedded.commerce.payments.action.performPaymentInteraction')
  },
  
  'embedded.commerce.payments.action.before': {
      actionName: 'embedded.commerce.payments.action.before',
      customFunction: require('./domains/commerce.payments/embedded.commerce.payments.action.before')
  },
  
  'embedded.commerce.payments.action.after': {
      actionName: 'embedded.commerce.payments.action.after',
      customFunction: require('./domains/commerce.payments/embedded.commerce.payments.action.after')
  }
};

},{"./domains/commerce.payments/embedded.commerce.payments.action.after":2,"./domains/commerce.payments/embedded.commerce.payments.action.before":3,"./domains/commerce.payments/embedded.commerce.payments.action.performPaymentInteraction":4}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
/**
 * Implementation for embedded.commerce.payments.action.before

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
    "setActionPreAuthFlag": {
      "parameters": [
        {
          "name": "isPreAuth",
          "type": "bool"
        }
      ]
    }
  },
  "setPaymentTerm": {
    "parameters": [
      {
        "name": "purchaseOrderPaymentTermObject",
        "type": "object"
      }
    ],
    "return": {
      "type": "mozu.commerceRuntime.contracts.payments.purchaseorderpaymentterm"
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
},{}],4:[function(require,module,exports){
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
},{}]},{},[1])(1)
});
