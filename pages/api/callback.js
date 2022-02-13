var Iyzipay = require('iyzipay')

var iyzipay = new Iyzipay({
  apiKey: process.env.IYZICO_API,
  secretKey: process.env.IYZICO_SECRET,
  uri: 'https://sandbox-api.iyzipay.com'
})

export default (req, res) => {
  res.statusCode = 200


  iyzipay.threedsPayment.create(
    {
      conversationId: req.body.conversationId,
      locale: Iyzipay.LOCALE.TR,
      paymentId: req.body.paymentId,
      conversationData: req.body.conversationData
    },
    function (err, result) {
 
    }
  )

  res.json('test')
}
