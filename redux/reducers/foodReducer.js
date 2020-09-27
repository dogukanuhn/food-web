const initialState = { modalStatus: false, modalFoodDetail: null }

export default function reducer(state = initialState, act) {
  const { type, action } = act

  switch (type) {
    case 'OpenModal':
      console.log(action)
      return {
        ...state,
        modalStatus: !state.modalStatus,
        modalFoodDetail: action
      }
    case 'CloseModal':
      return {
        ...state,
        modalStatus: !state.modalStatus,
        modalFoodDetail: null
      }

    case 'ChangeIngredientStatus':
      const updatedFoodDetail = {
        ...state.modalFoodDetail,
        ingredients: state.modalFoodDetail.ingredients.map((x, i) =>
          i === action.id ? { ...x, status: action.value } : x
        )
      }
      return {
        ...state,
        modalFoodDetail: updatedFoodDetail
      }

    default:
      return state
  }
}
