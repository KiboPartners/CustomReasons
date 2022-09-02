import paymentsBefore from "./paymentsBefore";

import { ActionId, createArcFunction } from "./arcTypes/index";

export const performPaymentInteraction = createArcFunction(
  ActionId["embedded.commerce.payments.action.performPaymentInteraction"],
  function (context: any, callback: (errorMessage?: string) => void) {
    console.log("ts PerformPaymentInteraction");
    callback();
  }
);

export const beforeAction = createArcFunction(
  ActionId["embedded.commerce.payments.action.before"],
  paymentsBefore
);

export const afterFunction = createArcFunction(
  ActionId["embedded.commerce.payments.action.after"],
  function (context: any, callback: (errorMessage?: string) => void) {
    console.log("ts PaymentAfter2");
    callback();
  }
);
