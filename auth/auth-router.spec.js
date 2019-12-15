const server = require("../api/server.js");

const request = require("supertest");

const db = require("../database/dbConfig.js");



describe('server', ()=> {
    describe('GET', ()=>{
        it('Should return a 400 OK', ()=>{
            return request(server)
            .get('/api/jokes')
            .then(res => {
                expect(res.status).toBe(400)
            })
        })
        it('should return JSON response', ()=>{
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
        it('Should return a 404 OK', ()=>{
            return request(server)
            .get('/api/auth/login')
            .then(res => {
                expect(res.status).toBe(404)
            })
        })
        it('should return JSON response', ()=>{
            return request(server)
            .get('/api/auth/login')
            .then(res => {
                expect(res.type).toMatch('text/html')
            })  
         })  
    })
})

/*

describe("POST /register", () => {
  it("will return JSON", () => {
    return request(server)
      .post("/api/auth/register")
      .send({
        username: "carl25",
        password: "mephistaclees"
      })
      .then(res => {
        expect(res.type).toMatch(/json/i);
      });
  });

  it("will return 200", () => {
    return request(server)
      .post("/api/auth/login")
      .send({
        username: "carl25",
        password: "mephistaclees"
      })
      .then(res => {
        expect(res.status).toBe(200);
      });
  });
});
*/
