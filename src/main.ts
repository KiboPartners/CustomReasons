import { ActionId, createArcFunction } from "./arcTypes/index";

const returnReasonsAfter = createArcFunction(
  ActionId["embedded.commerce.return.retrieveReasons"],
  function (context: any, callback: (errorMessage?: string) => void) {
    console.log("ts returnReasonsAfter");
    context.exec.setReasonList(context.get.ReasonList())
    callback();
  }
);

const cancellationReasonsAfter = createArcFunction(
  ActionId["http.commerce.orders.cancellationReasons.after"],
  function (context: any, callback: (errorMessage?: string) => void) {
    console.log("ts cancellationReasonsAfter");
    callback();
  }
);

const subscriptionsReasonsAfter = createArcFunction(
  ActionId["http.commerce.subscriptions.reasons.after"],
  function (context: any, callback: (errorMessage?: string) => void) {
    console.log("ts subscriptionsReasonsAfter");
    callback();
  }
);

const refundReasonsAfter = createArcFunction(
  ActionId["http.commerce.orders.refundReasons.after"],
  function (context: any, callback: (errorMessage?: string) => void) {
    console.log("ts refundReasonsAfter");
    callback();
  }
);

const platformApplicationsInstall = createArcFunction(
  ActionId["embedded.platform.applications.install"],
  function (context: any, callback: (errorMessage?: string) => void) {
    console.log("ts installing");
    callback();
  }
);

export default {
  "embedded.commerce.return.retrieveReasons": returnReasonsAfter,
  "http.commerce.orders.cancellationReasons.after": cancellationReasonsAfter,
  "http.commerce.subscriptions.reasons.after": subscriptionsReasonsAfter,
  "http.commerce.orders.refundReasons.after": refundReasonsAfter,
  "embedded.platform.applications.install": platformApplicationsInstall,
}