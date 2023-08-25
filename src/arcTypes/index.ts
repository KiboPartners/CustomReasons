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

export interface ArcFunction {
  actionName: ActionId;
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
  return { actionName: actionName, customFunction: customFunction };
}
