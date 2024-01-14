const app = require('../') // dışarıdaki index.js i require eder.
const request = require('supertest')(app); // şimdi axios "gibi" kullanabiliriz.

test('create a new passenger', async (done) => {
    const passengerToCreate = {
        name: "Test Person",
        location: "Moda"
    }
   const response = await request
   .post('/passengers')
   .send(passengerToCreate)
   expect(200);

   expect(response.status).toBe(200);
   done();
})