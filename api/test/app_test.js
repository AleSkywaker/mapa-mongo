const assert = require('assert');
const request = require('supertest')
const app = require('../app')

describe("The express app", () => {
    it('maneja una peticion GET a /api', (done) => {
        request(app)
            .get('/api')
            .end((err, response) => {
                assert(response.body.message === 'Hola Alex')
                done()
            })
    })
})