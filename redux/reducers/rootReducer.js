const initialState = { cart: [], cartTotalItem: 0 }

export default function reducer2(state = initialState, outAction) {
  const { type, action } = outAction

  switch (type) {
    case 'AddToCart':
      return {
        ...state,
        cart: [...state.cart, action],
        cartTotalItem: state.cartTotalItem + 1
      }
    case 'RemoveFromCart':
      return {
        ...state,
        cart: state.cart.filter((x, i) => i !== action),
        cartTotalItem: state.cartTotalItem - 1
      }

    default:
      return state
  }
}
