const initialState = { accountModal: { status: false, type: 0 }, cart: [] }

export default function reducer2(state = initialState, outAction) {
  const { type, action } = outAction

  switch (type) {
    case 'AccountModal':
      return {
        ...state,
        accountModal: { status: action.status, type: action.type }
      }
    case 'AddToCart':
      return {
        ...state,
        cart: state.cart.concat(action)
      }

    default:
      return state
  }
}
