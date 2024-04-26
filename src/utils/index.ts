import { OrderCancellationItem, OrderCancellationReasonCategory, OrderCancellationItemsConfig } from '../arcTypes'


export const getReasonFromConfigByCategory  = (
  category: OrderCancellationReasonCategory,
  configuration: OrderCancellationItemsConfig
): OrderCancellationItem[] => {
  const catCode = category as keyof typeof configuration
  const reasons = configuration[catCode] ?? []
  const isFulfillerReq = category.includes('_FFUI')

  if(reasons.length == 0){
    if(!isFulfillerReq) return configuration.items

    const adminCatCode = category.replace('_FFUI', '')
    const adminReasons = configuration[adminCatCode as keyof typeof configuration] ?? []

    if(adminReasons.length == 0){
      return configuration.items
    } else {
      return adminReasons
    }
  } else {
    return reasons
  }
}

export const getCategoryFromRequest = (context: any): OrderCancellationReasonCategory =>  {
  const ADMIN_PATH = '/commerce/orders/cancel/reasons'
  const FULFILLER_PATH = '/api/commerce/orders/cancel/reasons'
  const path = context?.request?.path
  const params = context?.request?.params

  console.log(JSON.stringify({path: path, params: params}))

  try {
    if(params.category) {
      if(path == ADMIN_PATH){
        for(const cat in OrderCancellationReasonCategory){
          if (cat == params.category) return OrderCancellationReasonCategory[cat as keyof typeof OrderCancellationReasonCategory]
        }
      } 

      if (path == FULFILLER_PATH){
        for(const cat in OrderCancellationReasonCategory){
          if (cat == params.category) return OrderCancellationReasonCategory[`${params.category}_FFUI` as keyof typeof OrderCancellationReasonCategory]
        }
      }

      return OrderCancellationReasonCategory.items
  
    } else {
      return OrderCancellationReasonCategory.items
    }

  } catch(e){
    console.error(`Failed to get category from request. Setting 'items' default. Error - ${e}`)
    return OrderCancellationReasonCategory.items
  }
}
