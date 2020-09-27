const initialState = { cart: [], cartTotal: 0 }

export default function reducer2(state = initialState, outAction) {
  const { type, action } = outAction

  switch (type) {
    case 'AddToCart':
      return {
        ...state,
        cart: [...state.cart, action],
        cartTotal: state.cartTotal + 1
      }

    default:
      return state
  }
}
