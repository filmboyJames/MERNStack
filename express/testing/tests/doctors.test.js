const chai = require("chai");

const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const server = require("../index");

const { doctorModel } = require("../db");

describe("doctor tests", () => {

    let testDoctor;

    beforeEach(async () => {
        try {
            await doctorModel.deleteMany({});
            testDoctor = await doctorModel.create({
                name: "William",
                startYear: "1963",
                endYear: "1966"

            });
            testDoctor = JSON.parse(JSON.stringify(testDoctor));
        } catch (err) {
            console.error(err);
        }
    });

    it("should create a Doctor", (done) => {
        const newDoctor = {
            "name": "Ncuti",
            "startYear": 2023,
            "endYear": 2026
        }
        chai.request(server).post("/doctors/createDoctor").send(newDoctor).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(201);
            chai.expect(res.body).to.include(newDoctor); //not equal as it has an auto generated ID 
            done(); //tells mocha the test has finished
        })
    })

    it("should get specific Doctor", (done) => {
        chai.request(server).get("/doctors/getDoctor/" + testDoctor.name).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.deep.include(testDoctor);

            done();
        })
    })

    it("should get all Doctors", (done) => {
        chai.request(server).get("/doctors/getAll").end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body).to.deep.include(testDoctor);
            done();
        })
    })

    it("should remove a Doctor", (done) => {
        chai.request(server).delete("/doctors/removeDoctor/"+ testDoctor.name).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(201);
            chai.expect(res.body).to.not.deep.include(testDoctor);
            done();
        })
    })
})