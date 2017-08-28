import aritGeo from '../app.js';
import "mocha";
import chai from "chai";

const assert = chai.assert;
//console.log(aritGeo([1,2,3]));

describe("aritGeo", () =>{
    //test 1
    it("should return Arithmetic", () =>{
        let ap = aritGeo([1,2,3])
        assert.equal(ap, "Arithmetic")
    });
    //test 2
    it("should return Geometric", () =>{
        let gp = aritGeo([2,4,8]);
        assert.equal(gp, "Geometric");
    });
    //test 3
    it("should return Geometric", () =>{
        let gp = aritGeo([1,-1,1]);
        assert.equal(gp, "Geometric");
    });
    //test 4
    it("should return Arithmetic", () =>{
        let ap = aritGeo([0,-1,-2])
        assert.equal(ap, "Arithmetic")
    });
    //test 5
    it("should return Arithmetic", () =>{
        let ap = aritGeo([1,2,3])
        assert.equal(ap, "Arithmetic")
    });

    //test 6
    it("should return Arithmetic", () =>{
        let ap = aritGeo([-10,-15,-20])
        assert.equal(ap, "Arithmetic")
    });

    //test 7
    it("should return 0", () =>{
        let zero = aritGeo([])
        assert.equal(zero, 0)
    });

    //test 8
    it("should return -1", () =>{
        let notAny = aritGeo([1,2])
        assert.equal(notAny, -1)
    });

    //test 9
    it("should return Arithmetic", () =>{
        let ap = aritGeo([0, 0, 0])
        assert.equal(ap, "Arithmetic")
    });

    //test 10
    it("should return Arithmetic", () =>{
        let ap = aritGeo([1,2,3])
        assert.equal(ap, "Arithmetic")
    });
    //test 11
    it("should return -1", () =>{
        let notAny = aritGeo([5, 4, 1, 5, 4])
        assert.equal(notAny, -1)
    });
    //test 12
    it("should return -1", () =>{
        let notAny = aritGeo(["5", "", 1, 5, 4])
        assert.equal(notAny, -1)
    });

});