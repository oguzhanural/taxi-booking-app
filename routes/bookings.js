const { bookingService } = require('../services')

const router = require('express').Router()

router.get('/', async (req, res) => {
  const bookings = await bookingService.load()

  res.render('bookings', { bookings })
})

router.get('/search', async (req, res) => {
  const origin = req.query.origin   // validation
  const destination = req.query.destination // validation

  const query = {}    // destiantion'ı undefined olan bir destination olmadığı için patlıyordu o yüzden bunu yazdık.

  // sonra da bu şekilde ekledik
  if (origin) query.origin = origin
  if (destination) query.destination = destination

  const bookings = await bookingService.query(query)

  res.render('bookings', { bookings })
})

module.exports = router