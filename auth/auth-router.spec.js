const server = require("../api/server.js");

const request = require("supertest");

const db = require("../database/dbConfig.js");

describe("POST /register", () => {
  it("will return JSON", () => {
    return request(server)
      .post("/api/auth/register")
      .send({
        username: "carl25",
        password: "mephistaclees"
      })
      .then(res => {
        expect(res.type).toMatch("/json/");
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
