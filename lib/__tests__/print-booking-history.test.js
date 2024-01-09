const printBookingHistory = require('../print-booking-history');

import SoundPlayer from './sound-player';

// initialzation
test('prints passenger bookings', () => {
    const passenger = {
        name: "Oğuzhan",
        location: "İstanbul",
        bookings: [{
            passenger: {name: "Oğuzhan"},
            driver: {name: "Stefan"},
            origin: "İstanbul",
            destination: "Bolu"
        }]
    }
    const consoleSpy = jest.spyOn(console, 'log')   // console u dinliyor

    // tests

    printBookingHistory(passenger)

    // assertions
    expect(consoleSpy).toHaveBeenCalledWith("Oğuzhan booked Stefan to travel from İstanbul to Bolu")

    //teardown
    spy.mockRestore();

})