const {addNumbers} = require("./index");
const {calculateTax} = require("./index");

test("Adds two numbers", function () {
    expect(addNumbers(1, 2)).toBe(3);
    expect(addNumbers(4, 8)).toBe(12);
});

test("Calculates sales tax", function () {
    expect(calculateTax(10)).toBe(10.70);
    expect(calculateTax(100)).toBe(107);
});
