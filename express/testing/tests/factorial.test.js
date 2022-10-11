const { factorial } = require("../factorial");
const { expect } = require("chai");

describe("Factorial test", () => { //set of tests
    it("should equal 5", () => { //single test
        expect(factorial(120)).to.equal(5);
    })
    it(("should equal NONE"),() => {
        expect(factorial(150)).to.equal("NONE");
    })
});