const BaseService = require('./base-service')
const Passenger = require('../models/passenger')
const bookingDatabase = require('./booking-service')
const driverDatabase = require('./driver-service')

class PassengerDatabase extends BaseService {
  async findByName(name) {
    return this.findBy('name', name)
  }

  // bu fonksiyonda bridge pattern uygulanmıştır. Dış dünyaya köprülendi.
  
  async book(driverId, passengerId, origin, destination) {  
    const passenger = await this.find(passengerId)
    const driver = await driverDatabase.find(driverId)

    // örneğin burada passenger'ın parasını check etmek, driver'ın uygunluğunu check etmek gibi 
    // kontroller gerekebilir. 
    const booking = await bookingDatabase.insert({ driver, passenger, origin, destination })
    passenger.bookings.push(booking)

    await passenger.save()

    return booking
  }
}

module.exports = new PassengerDatabase(Passenger)