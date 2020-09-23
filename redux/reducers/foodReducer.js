import update from 'react-addons-update'
const initialState = { modalStatus: false, modalFoodDetail: null }

export default function reducer(state = initialState, act) {
  const { type, action } = act

  switch (type) {
    case 'ToggleModal':
      console.log(action)
      return {
        ...state,
        modalStatus: !state.modalStatus,
        modalFoodDetail: action
      }

    case 'ChangeIngredientStatus':
      return update(state, {
        modalFoodDetail: {
          ingredients: {
            [action.id]: {
              status: { $set: action.value }
            }
          }
        }
      })

    default:
      return state
  }
}
