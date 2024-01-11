/**
 * List of allo Action Ids supported in Kibo
 */
export enum ActionId {
  "embedded.commerce.return.retrieveReasons",
  "http.commerce.orders.cancellationReasons.after",
  "http.commerce.subscriptions.reasons.after",
  "http.commerce.orders.refundReasons.after",
  "embedded.platform.applications.install",
}

/**
 * Categories used to determine list of order/order line item cancellation reason. Line items occur on shipment so request includes shipping method.
 */

export enum OrderCancellationReasonCategory {
  'SHOPPER'='SHOPPER',
  'TRANSFER'='TRANSFER',
  'DELIVER'='DELIVERY',
  'STH'='STH',
  'FXCB'='FXCB',
  'BOPIS'='BOPIS',
  'CSR'='CSR',
  'SHOPPER_FFUI'='SHOPPER_FFUI',
  'TRANSFER_FFUI'='TRANSFER_FFUI',
  'DELIVERY_FFUI'='DELIVERY_FFUI',
  'STH_FFUI'='STH_FFUI',
  'FXCB_FFUI'='FXCB_FFUI',
  'BOPIS_FFUI'='BOPIS_FFUI',
  'CSR_FFUI'='CSR_FFUI',
  'items'='items',
}
export interface OrderCancellationItem {
  reasonCode: string
  name: string
  needsMoreInfo: boolean
}

export interface OrderCancellationItemsConfig {
  items: OrderCancellationItem[]
  SHOPPER?: OrderCancellationItem[]
  TRANSFER?: OrderCancellationItem[]
  DELIVERY?: OrderCancellationItem[]
  STH?: OrderCancellationItem[]
  FXCB?: OrderCancellationItem[]
  BOPIS?: OrderCancellationItem[]
  CSR?: OrderCancellationItem[]
  SHOPPER_FFUI?: OrderCancellationItem[]
  TRANSFER_FFUI?: OrderCancellationItem[]
  DELIVERY_FFUI?: OrderCancellationItem[]
  STH_FFUI?: OrderCancellationItem[]
  FXCB_FFUI?: OrderCancellationItem[]
  BOPIS_FFUI?: OrderCancellationItem[]
  CSR_FFUI?: OrderCancellationItem[]
}

export interface ArcFunction {
  actionName: string;
  customFunction: (
    context: any,
    callback: (errorMessage?: string) => void
  ) => void;
}

export function createArcFunction(
  actionName: ActionId,
  customFunction: (
    context: any,
    callback: (errorMessage?: string) => void
  ) => void
): ArcFunction {
  return { actionName: ActionId[actionName], customFunction: customFunction };
}
