/**
 * Add Group Products by Brand Name, will be executed
 * only once when page gets loaded.
 * @param  {Object} prods  Products Grouped by Brand
 * @return {Object}        Action
 */
export function updateActiveProducts(prods) {
  return {
    type :  'UPDATE_ACTIVE_PRODUCTS',
    prods
  }
}

/**
 * Reducer: Updates `activeProducts` part of main state.
 * @param  {Object} state   `activeProducts` part of state
 * @param  {Object} action   Action
 * @return {Object}         Updated state.
 */
export default function activeProducts(state = [], action) {
  switch (action.type) {
  case 'UPDATE_ACTIVE_PRODUCTS':
    return action.prods

  default:
    return state
  }
}
