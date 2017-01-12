/**
 * Add Group Products by Brand Name, will be executed
 * only once when page gets loaded.
 * @param  {Object} prods  Products Grouped by Brand
 * @return {Object}        Action
 */
export function addProductsByBrand(prods) {
  return {
    type :  'ADD_PRODUCTS_BY_BRAND',
    prods
  }
}

/**
 * Reducer: Updates `byBrand` part of main state.
 * @param  {Object} state   `byBrand` part of state
 * @param  {Object} action   Action
 * @return {Object}         Updated state.
 */
export default function byBrand(state = {}, action) {
  switch (action.type) {
  case 'ADD_PRODUCTS_BY_BRAND':
    return {
      ...state,
      ...action.prods
    }

  default:
    return state
  }
}
