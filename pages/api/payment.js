var Iyzipay = require('iyzipay')

var iyzipay = new Iyzipay({
  apiKey: process.env.IYZICO_API,
  secretKey: process.env.IYZICO_SECRET,
  uri: 'https://sandbox-api.iyzipay.com'
})

export default (req, res) => {
  if (req.method === 'GET') {
    res.statusCode = 404
    res.json('NOT FOUND')
  }

  if (req.method === 'POST') {
    var detail = req.body

    var basketId = Math.floor(Math.random() * 1000000) + 100000

    var adress = {
      contactName: detail.userDetail.name + ' ' + detail.userDetail.surname,
      city: detail.userDetail.city,
      country: detail.userDetail.country,
      address: detail.userDetail.registrationAddress
    }

    var basketArray = []

    detail.basket.map((x) => {
      var ingredients = ''
      if (x['ingredients'] != undefined) {
        x['ingredients'].map((x) => {
          if (x.status) ingredients = ingredients.concat(x.name + ' ')
        })
      }

      var selectedItems = ''
 
      if (x['selectedItems'] != undefined) {
        Object.values(x['selectedItems']).map((x) => {
          selectedItems = selectedItems.concat(x + ' ')
        })
      }

      var item = {
        id: x.id,
        name: x.name + `(${ingredients + selectedItems})`,
        category1: 'food',
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: x.sellPrice.toString()
      }

      basketArray.push(item)
    })

    var request = {
      locale: Iyzipay.LOCALE.TR,
      price: detail.totalPrice.toString(),
      callbackUrl: 'http://localhost:3000/api/callback',
      paidPrice: detail.totalPrice.toString(),
      currency: Iyzipay.CURRENCY.TRY,
      installment: '1',
      basketId: basketId,
      paymentChannel: Iyzipay.PAYMENT_CHANNEL.WEB,
      paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
      paymentCard: detail.paymentCard,
      buyer: detail.userDetail,
      shippingAddress: adress,
      billingAddress: adress,
      basketItems: basketArray
    }

    iyzipay.threedsInitialize.create(request, (err, result) => {
      res.json(result)
    })
  }
}
