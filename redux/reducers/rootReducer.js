const initialState = {
  cart: [
    {
      id: 1,
      image: '/images/burger.jpg',
      name: 'Jet Burger',
      basePrice: 10,
      discount: true,
      sellPrice: 8.99,
      ingredients: [
        {
          name: 'Soğan',
          status: true
        },
        {
          name: 'Domates',
          status: true
        },
        {
          name: 'Marul',
          status: true
        }
      ],
      selectedItems: [],
      ingredientsText:
        'Kuru soğan, buğday unu, tam buğday unu. Sarımsak, tam yağlı yoğurt, pul biber, tereyağı, dana kıyma, karabiber',
      count: 1
    },
    {
      id: 2,
      image: '/images/taco.jpg',
      name: 'Etli Taco',
      basePrice: 13,
      discount: false,
      sellPrice: 13,
      selectList: [
        {
          name: 'Hamur',
          data: ['Sert', 'Yumuşak']
        }
      ],
      selectedItems: {
        0: 'Sert'
      },
      ingredientsText:
        'Kuru soğan, buğday unu, tam buğday unu. Sarımsak, tam yağlı yoğurt, pul biber, tereyağı, dana kıyma, karabiber',
      count: 1
    }
  ],
  cartTotalItem: 2
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
