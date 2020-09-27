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
    case 'ChangeFoodCount':
      let oldCount
      return {
        ...state,
        cart: state.cart.map((x, i) => {
          if (i === action.id) {
            oldCount = x.count
            return { ...x, count: action.count }
          }

          return x
        }),
        cartTotalItem: state.cartTotalItem + (action.count - oldCount)
      }

    default:
      return state
  }
}
