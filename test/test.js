const chai = require("chai");
const fs = require("fs");
let StringManipulation = require("../src/StringManipulation");
let expect = chai.expect;

const newString = new StringManipulation("hello world");

describe("String Manipulation", () => {
  describe("String to upper case", () => {
    it("it should capitalize the string", (done) => {
      expect(newString.toUpper()).to.be.equal("HELLO WORLD");
      done();
    });
  });
  describe("String to alternate case", () => {
    it("it should capitalize on every 2nd letter in the string", (done) => {
      expect(newString.toAlternate()).to.be.equal("hElLo wOrLd");
      done();
    });
  });
  describe("Check CSV Created", () => {
    it("it should return CSV created!", (done) => {
      expect(newString.toCSV()).to.be.equal("CSV created!");
      done();
    });
  });
  describe("Check CSV File Content", () => {
    it("it should return the string in comma seperated format", (done) => {
      newString.toCSV();
      fs.readFile("output.csv", "utf8", function (err, data) {
        if (err) throw err;
        expect(data).to.be.equal("h,e,l,l,o, ,w,o,r,l,d");
      });
      done();
    });
  });
});
