import { ActionId } from "./arcTypes/index";

import { ReasonCollection } from '@kibocommerce/rest-sdk/clients/Commerce/models/ReasonCollection'
import { RefundReasonCollection } from '@kibocommerce/rest-sdk/clients/Commerce/models/RefundReasonCollection'
import { CancelReasonCollection } from '@kibocommerce/rest-sdk/clients/Commerce/models/CancelReasonCollection'
import { SubscriptionReasonCollection } from '@kibocommerce/rest-sdk/clients//Subscription/models/SubscriptionReasonCollection'

const Client = require('mozu-node-sdk/client')

export interface ArcJSConfig {
  actions?: (ActionsEntity)[] | null;
  configurations?: (null)[] | null;
  defaultLogLevel: string;
}
export interface ActionsEntity {
  actionId: string;
  contexts?: (ContextsEntity)[] | null;
}
export interface ContextsEntity {
  customFunctions?: (CustomFunctionsEntity)[] | null;
}
export interface CustomFunctionsEntity {
  applicationKey: string;
  functionId: string;
  enabled: boolean;
  configuration: any;
}

const constants = Client.constants;
const myClientFactory = Client.sub({
  getArcConfig: Client.method({
    method: constants.verbs.GET,
    url: '{+tenantPod}api/platform/extensions'
  }),
  setArcConfig: Client.method({
    method: constants.verbs.PUT,
    url: '{+tenantPod}api/platform/extensions'
  }),
  getOrderCancelReasons: Client.method({
    method: constants.verbs.GET,
    url: '{+tenantPod}api/commerce/orders/cancel/reasons'
  }),
  getRefundReasons: Client.method({
    method: constants.verbs.GET,
    url: '{+tenantPod}api/commerce/orders/refunds/refundreasons'
  }),
  getReturnReasons: Client.method({
    method: constants.verbs.GET,
    url: '{+tenantPod}api/commerce/returns/reasons'
  }),
  getSubscriptionReasons: Client.method({
    method: constants.verbs.GET,
    url: '{+tenantPod}api/commerce/subscriptions/reasons'
  }),
}) as (context: any) => {
  getArcConfig: () => Promise<ArcJSConfig>,
  setArcConfig: (_: any, payload: { body: ArcJSConfig}) => any,
  getOrderCancelReasons: () => Promise<CancelReasonCollection>,
  getRefundReasons: () => Promise<RefundReasonCollection>,
  getReturnReasons: () => Promise<ReasonCollection>,
  getSubscriptionReasons: () => Promise<SubscriptionReasonCollection>
};

/**
 * The main implementation of the install function 
 * 
 * @param context context
 * @param callback callback
 */
export const platformApplicationsInstallImplementation = async (context: any, callback: (errorMessage?: string) => void) => {

  const myClient = myClientFactory(context)

  try {
    const arcConfig = await myClient.getArcConfig()

    // First, return reasons
    const RETRIEVE_REASONS_ACTION = ActionId[ActionId["embedded.commerce.return.retrieveReasons"]]
    const returnReasonsAction = arcConfig.actions?.find(a => a.actionId == RETRIEVE_REASONS_ACTION)
    if (!returnReasonsAction) {
      try {
        const returnReasons = await myClient.getReturnReasons()

        arcConfig.actions?.push({
          actionId: RETRIEVE_REASONS_ACTION,
          "contexts": [
            {
              "customFunctions": [
                {
                  applicationKey: context.apiContext.appKey,
                  functionId: RETRIEVE_REASONS_ACTION,
                  enabled: true,
                  configuration: {
                    items: returnReasons.items
                  }
                }
              ]
            }
          ]
        })
      } catch (error) {
        console.error("Error getting return reasons", error)
      }
    }

    // Next, Order Cancellation Reasons
    const ORDER_CANCELLATION_REASONS_ACTION = ActionId[ActionId["http.commerce.orders.cancellationReasons.after"]]
    const cancellationReasonsAction = arcConfig.actions?.find(a => a.actionId == ORDER_CANCELLATION_REASONS_ACTION)
    if (!cancellationReasonsAction) {
      try {
        const cancellationReasons = await myClient.getOrderCancelReasons()

        arcConfig.actions?.push({
          actionId: ORDER_CANCELLATION_REASONS_ACTION,
          "contexts": [
            {
              "customFunctions": [
                {
                  applicationKey: context.apiContext.appKey,
                  functionId: ORDER_CANCELLATION_REASONS_ACTION,
                  enabled: true,
                  configuration: {
                    items: cancellationReasons.items,
                  }
                }
              ]
            }
          ]
        })
      } catch (error) {
        console.error("Error getting order cancellation reasons", error)
      }
    }

    // Next, Refund Reasons
    const REFUND_REASONS_ACTION = ActionId[ActionId["http.commerce.orders.refundReasons.after"]]
    const refundReasonsAction = arcConfig.actions?.find(a => a.actionId == REFUND_REASONS_ACTION)
    if (!refundReasonsAction) {
      try {
        const refundReasons = await myClient.getRefundReasons()

        arcConfig.actions?.push({
          actionId: REFUND_REASONS_ACTION,
          "contexts": [
            {
              "customFunctions": [
                {
                  applicationKey: context.apiContext.appKey,
                  functionId: REFUND_REASONS_ACTION,
                  enabled: true,
                  configuration: {
                    items: refundReasons.items
                  }
                }
              ]
            }
          ]
        })
      } catch (error) {
        console.error("Error getting order cancellation reasons", error)
      }
    }

    // Finally, Subscription Reasons
    const SUBSCRIPTION_REASONS_ACTION = ActionId[ActionId["http.commerce.subscriptions.reasons.after"]]
    const subscriptionsAction = arcConfig.actions?.find(a => a.actionId == SUBSCRIPTION_REASONS_ACTION)
    if (!subscriptionsAction) {
      try {
        const subscriptionReasons = await myClient.getSubscriptionReasons()

        arcConfig.actions?.push({
          actionId: SUBSCRIPTION_REASONS_ACTION,
          "contexts": [
            {
              "customFunctions": [
                {
                  applicationKey: context.apiContext.appKey,
                  functionId: SUBSCRIPTION_REASONS_ACTION,
                  enabled: true,
                  configuration: {
                    items: subscriptionReasons.items
                  }
                }
              ]
            }
          ]
        })
      } catch (error) {
        console.error("Error getting order cancellation reasons", error)
      }
    }

    // Now we are all done, update the Arc config
    await myClient.setArcConfig({}, {body: arcConfig})
  } catch {
    callback("There was an error installing.")
  }
}
