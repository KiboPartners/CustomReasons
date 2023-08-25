import { ActionId, createArcFunction } from "./arcTypes/index";

export const returnReasonsAfter = createArcFunction(
  ActionId["embedded.commerce.return.retrieveReasons"],
  function (context: any, callback: (errorMessage?: string) => void) {
    console.log("ts returnReasonsAfter");
    context.exec.setReasonList(context.get.ReasonList())
    callback();
  }
);

export const cancellationReasonsAfter = createArcFunction(
  ActionId["http.commerce.orders.cancellationReasons.after"],
  function (context: any, callback: (errorMessage?: string) => void) {
    console.log("ts cancellationReasonsAfter");
    callback();
  }
);

export const subscriptionsReasonsAfter = createArcFunction(
  ActionId["http.commerce.subscriptions.reasons.after"],
  function (context: any, callback: (errorMessage?: string) => void) {
    console.log("ts subscriptionsReasonsAfter");
    callback();
  }
);

export const refundReasonsAfter = createArcFunction(
  ActionId["http.commerce.orders.refundReasons.after"],
  function (context: any, callback: (errorMessage?: string) => void) {
    console.log("ts refundReasonsAfter");
    callback();
  }
);

export const platformApplicationsInstall = createArcFunction(
  ActionId["embedded.platform.applications.install"],
  function (context: any, callback: (errorMessage?: string) => void) {
    console.log("ts installing");
    callback();
  }
);
