

import paymentsBefore from './paymentsBefore'

export const performPaymentInteraction = {
    actionName: 'embedded.commerce.payments.action.performPaymentInteraction',
    customFunction: function(context: any, callback: (errorMessage?: string) => void) { 
      console.log("ts PerformPaymentInteraction")
      callback()
    }
  }
  
export const beforeAction = {
    actionName: 'embedded.commerce.payments.action.before',
    customFunction: paymentsBefore
  }

export const afterFunction = {
    actionName: 'embedded.commerce.payments.action.after',
    customFunction: function(context: any, callback: (errorMessage?: string) => void) { 
      console.log("After")
      callback()
    }
  }