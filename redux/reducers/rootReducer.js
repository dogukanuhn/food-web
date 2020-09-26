const initialState = { cart: [] }

export default function reducer2(state = initialState, outAction) {
  const { type, action } = outAction

  switch (type) {
    case 'AddToCart':
      return {
        ...state,
        cart: [...state.cart, action]
      }

    default:
      return state
  }
}
