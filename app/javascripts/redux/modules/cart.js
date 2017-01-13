export function updateCart(id, flag) {
  return {
    type : 'UPDATE_CART',
    id,
    flag
  }
}

export default function cart(state = [], action) {
  switch (action.type) {
  case 'UPDATE_CART':
    return state.concat([action.id])

  default:
    return state
  }

}