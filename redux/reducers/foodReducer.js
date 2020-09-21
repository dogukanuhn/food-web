const initialState = { modalStatus: false }

export default function reducer(state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'ToggleModal':
      return {
        ...state,
        modalStatus: !state.modalStatus
      }
    default:
      return state
  }
}
