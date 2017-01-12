import { products } from '$store'
import { formatProducts } from '$utils/formatters'

function updateProducts(allProducts) {
  return {
    type : 'UPDATE_PRODUCTS',
    allProducts
  }
}

// Async Action Creator
export function getProducts() {
  return (dispatch) => {
    const formattedProducts = formatProducts(products)

    dispatch(updateProducts(formattedProducts.allProducts))
  }
}

export default function allProducts(state={}, action) {
  switch (action.type) {
  case 'UPDATE_PRODUCTS' :
    return {
      ...state,
      ...action.allProducts
    }

  default:
    return state
  }
}products