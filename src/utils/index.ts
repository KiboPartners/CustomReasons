import { OrderCancellationItem, OrderCancellationReasonCategory, OrderCancellationItemsConfig } from '../arcTypes'

/**
 * This function will only be called if context.configuration.items is present.
 */

const getReasonFromConfigByCategory = (
  category: OrderCancellationReasonCategory,
  configuration: OrderCancellationItemsConfig
): OrderCancellationItem[] => {
  const catCode = category as unknown as keyof typeof configuration
  if (configuration[catCode] && configuration[catCode].length > 0) {
    return configuration[catCode]
  } else {
    return configuration.items
  }
}

export default getReasonFromConfigByCategory