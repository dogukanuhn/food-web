const initialState = {
  cart: [{
    "id":{
       "timestamp":1641314901,
       "machine":2000950,
       "pid":20799,
       "increment":12081505,
       "creationTime":"2022-01-04T16:48:21Z"
    },
    "productId":"ebba33dd-bf62-4a16-8ba1-3fb1f688226c",
    "name":"Pizza",
    "ingredientsText":"Tavuk, Barbekü sosu, Hamur, beyaz un, domates sosu",
    "basePrice":10,
    "sellPrice":5
 }],
  cartTotalItem: 1
}

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
