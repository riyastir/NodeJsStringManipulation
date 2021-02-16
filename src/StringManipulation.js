const fs = require("fs");
/**
 * This class will Manipulate the string into Upper case and Alternate case,
 * Store each character on the string to a CSV file
 * Author: Mohamed Riyas KP
 * Date : 16/02/2020
 */
class StringManipulation {
  
  constructor(str) {
    /* Check the string is empty */
    if (str === "") {
      throw new Error("At least one character is needed");
    }
    /* Check the string contains any non alphabets */
    var regex = /^[a-zA-Z ]+$/;
    if (!str.match(regex)) {
      throw new Error("Invalid String. Only A-Z and a-z alphabets allowed");
    }
    this.str = str.trim();
  }

  /* To display the entered string */
  display() {
    return this.str;
  }

  /* To change the string to upper case */
  toUpper() {
    return this.str.toUpperCase();
  }

  /* To change the string to alternate upper and lower case */
  toAlternate() {
    let alternate = this.str.toLowerCase().split("");
    for (let i = 0; i < alternate.length; i++) {
      if ((i + 1) % 2 === 0) {
        alternate[i] = alternate[i].toUpperCase();
      }
    }
    return alternate.join("");
  }

  /* To create CSV file from the string */
  toCSV() {
    let strArray = this.str.split("");
    const writeCSV = fs.createWriteStream("output.csv");
    let status = writeCSV.write(strArray.join(","));
    if (status) {
      return "CSV created!";
    } else {
      return "CSV failed!";
    }
  }

  /* To display the results in single call*/
  result() {
    let result = this.toUpper() + "\n";
    result += this.toAlternate() + "\n";
    result += this.toCSV() + "\n";

    return result;
  }
}

module.exports = StringManipulation;
