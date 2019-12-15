const server = require("./api/server.js");

const request = require("supertest");

const db = require("./database/dbConfig");



describe('server', ()=> {
    describe('GET', ()=>{
        it('return a 400 OK', ()=>{
            return request(server)
            .get('/api/jokes')
            .then(res => {
                expect(res.status).toBe(400)
            })
        })
        it('JSON response', ()=>{
            return request(server)
            .get('/api/jokes')
            .then(res => {
                expect(res.type).toMatch(/json/i)
            })  
         })  
    })
})

describe('POST', ()=> {
    describe('GET', ()=>{
        it('return a 404 OK', ()=>{
            return request(server)
            .get('/api/auth/login')
            .then(res => {
                expect(res.status).toBe(404)
            })
        })
        it('JSON response', ()=>{
            return request(server)
            .get('/api/auth/login')
            .then(res => {
                expect(res.type).toMatch('text/html')
            })  
         })  
    })
})

