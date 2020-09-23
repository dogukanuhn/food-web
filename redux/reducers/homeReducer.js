const initialState = {
  populerFoods: [
    {
      id: 1,
      image: '/images/burger.jpg',
      name: 'Jet Burger',
      basePrice: '10.00',
      discount: true,
      sellPrice: '8.99',
      ingredients: [
        { name: 'Soğan', status: true },
        { name: 'Domates', status: true },
        { name: 'Marul', status: true }
      ],
      ingredientsText:
        'Kuru soğan, buğday unu, tam buğday unu. Sarımsak, tam yağlı yoğurt, pul biber, tereyağı, dana kıyma, karabiber'
    },
    {
      id: 2,
      image: '/images/taco.jpg',
      name: 'Etli Taco',
      basePrice: '13.00',
      discount: false,
      sellPrice: '13.00',
      selectList: [{ name: 'Hamur', data: ['Sert', 'Yumuşak'] }],
      ingredientsText:
        'Kuru soğan, buğday unu, tam buğday unu. Sarımsak, tam yağlı yoğurt, pul biber, tereyağı, dana kıyma, karabiber'
    },
    {
      id: 3,
      image: '/images/pizza.jpg',
      name: 'Barbekü Soslu Tavuklu Pizza',
      basePrice: '23.00',
      discount: false,
      sellPrice: '23.00',
      selectList: [{ name: 'Hamur', data: ['Kalın', 'İnce'] }],
      ingredientsText: 'Tavuk, Barbekü sosu,  Hamur, beyaz un, domates sosu'
    },
    {
      id: 4,
      image: '/images/nachos.jpg',
      name: 'Nachos',
      basePrice: '17.00',
      discount: true,
      sellPrice: '15.00',
      ingredientsText: 'Tavuk, Barbekü sosu,  Hamur, beyaz un, domates sosu'
    }
  ]
}

export default function reducer(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    default:
      return state
  }
}
