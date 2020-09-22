const initialState = { accountModal: false }

export default function reducer2(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'ToggleAccountModal':
      return {
        ...state,
        accountModal: !state.accountModal
      }
    default:
      return state
  }
}
