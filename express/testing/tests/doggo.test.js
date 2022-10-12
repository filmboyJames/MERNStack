const { expect } = require("chai");

const doggo = require("../doggo");

describe("Doggo test", () => { //set of tests
    it("should have a length of 99", () => { //single test
        expect(doggo(44).length).to.equal(99);
    });
    it(("should not contain 37th"), () => {
        expect(doggo(37)).to.not.include("37th");
    });
    it("should have 11th", () => {
        expect(doggo(1)).to.include("11th")
    });
    it("should have 12th", () => {
        expect(doggo(1)).to.include("12th")
    });
    it("should have 13th", () => {
        expect(doggo(1)).to.include("13th")
    });
    it("should end in st", () => {
        expect(doggo(1)).to.include("21st")
    });
    it("should end in nd", () => {
        expect(doggo(1)).to.include("32nd")
    });    
    it("should end in rd", () => {
        expect(doggo(1)).to.include("43rd")
    });

});