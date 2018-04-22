
const addNumbers = require("./index"); 

test("Adds two numbers", function () {
    expect(addNumbers(1, 2)).toBe(3);
    expect(addNumbers(4, 8)).toBe(12);
});
