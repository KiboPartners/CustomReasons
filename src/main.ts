import { ActionId, createArcFunction, OrderCancellationReasonCategory } from "./arcTypes/index";
import { platformApplicationsInstallImplementation } from "./platformInstall";
import { getReasonFromConfigByCategory, getCategoryFromRequest } from './utils'

const returnReasonsAfter = createArcFunction(
  ActionId["embedded.commerce.return.retrieveReasons"],
  function (context: any, callback: (errorMessage?: string) => void) {
    const items = context.configuration.items
    if (items && Array.isArray(items) && (items as Array<string>).every(item => typeof item == 'string')) {
      context.exec.setReasonList(context.configuration.items)
    } else {
      context.exec.setReasonList(context.get.reasonList())
    }
    callback();
  }
);

const cancellationReasonsAfter = createArcFunction(
  ActionId["http.commerce.orders.cancellationReasons.after"],
  function (context: any, callback: (errorMessage?: string) => void) {
    console.log("ts cancellationReasonsAfter");
    const category: OrderCancellationReasonCategory = getCategoryFromRequest(context)
    if (context.configuration.items) {
      context.response.body.items = getReasonFromConfigByCategory(category, context.configuration)
    }
    callback();
  }
);

const subscriptionsReasonsAfter = createArcFunction(
  ActionId["http.commerce.subscriptions.reasons.after"],
  function (context: any, callback: (errorMessage?: string) => void) {
    console.log("ts subscriptionsReasonsAfter");
    if (context.configuration.items) {
      context.response.body.items = context.configuration.items
    }
    callback();
  }
);

const refundReasonsAfter = createArcFunction(
  ActionId["http.commerce.orders.refundReasons.after"],
  function (context: any, callback: (errorMessage?: string) => void) {
    console.log("ts refundReasonsAfter");
    if (context.configuration.items) {
      context.response.body.items = context.configuration.items
    }
    callback();
  }
);

const platformApplicationsInstall = createArcFunction(
  ActionId["embedded.platform.applications.install"],
  function (context: any, callback: (errorMessage?: string) => void) {
    console.log("ts installing");
    platformApplicationsInstallImplementation(context, callback).then(() => {
      callback()
    })
  }
);

export default {
  "embedded.commerce.return.retrieveReasons": returnReasonsAfter,
  "http.commerce.orders.cancellationReasons.after": cancellationReasonsAfter,
  "http.commerce.subscriptions.reasons.after": subscriptionsReasonsAfter,
  "http.commerce.orders.refundReasons.after": refundReasonsAfter,
  "embedded.platform.applications.install": platformApplicationsInstall,
}