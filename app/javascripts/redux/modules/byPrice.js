/**
 * Add Group Products by Price, will be executed
 * only once when page gets loaded.
 * @param  {Object} prods  Products Grouped by Price
 * @return {Object}        Action
 */
export function addProductsByPrice(prods) {
  return {
    type :  'ADD_PRODUCTS_BY_PRICE',
    prods
  }
}

/**
 * Reducer: Updates `byPrice` part of main state.
 * @param  {Object} state   `byPrice` part of state
 * @param  {Object} action   Action
 * @return {Object}         Updated state.
 */
export default function byPrice(state = {}, action) {
  switch (action.type) {
  case 'ADD_PRODUCTS_BY_PRICE':
    return {
      ...state,
      ...action.prods
    }

  default:
    return state
  }
}
