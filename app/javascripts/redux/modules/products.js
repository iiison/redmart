import { products }            from '$store'
import { formatProducts }      from '$utils/formatters'
import { addProductsByPrice }  from './byPrice'
import { addProductsByBrand }  from './byBrand'
import { addAllFilters }       from './filter'
import { updateActiveProducts } from './activeProducts'

/**
 * Add Products for first time
 * @param  {Object} formattedProds  Formatted Products Hash
 * @return {Object}              Action
 */
function updateProducts(formattedProds) {
  return {
    type : 'UPDATE_PRODUCTS',
    formattedProds
  }
}

// Async Action Creators
/**
 * - Get Products dat from API/Local
 * - Format the data
 * - setup state for:
 *   - allProducts
 *   - byPrice
 *   -byBrand
 * @return {Promise}  Action
 */
export function setupProducts() {
  return (dispatch) => {
    const formattedProducts = formatProducts(products)

    dispatch(updateProducts(formattedProducts.allProducts))
    dispatch(addProductsByPrice(formattedProducts.byPrice))
    dispatch(addProductsByBrand(formattedProducts.byBrand))
    dispatch(addAllFilters(formattedProducts.filters, formattedProducts.detailedFilters))
    dispatch(updateActiveProducts(Object.keys(formattedProducts.allProducts)))

    return {}
  }
}

/**
 * Reducer: Updates `allProducts` part of main state.
 * @param  {Object} state   `allProducts` part of state
 * @param  {Object} action   Action
 * @return {Object}         Updated state.
 */
export default function allProducts(state = {}, action) {
  switch (action.type) {
  case 'UPDATE_PRODUCTS' :
    return {
      ...state,
      ...action.formattedProds
    }

  default:
    return state
  }
}
