const calculator = require("../models/calculator.js");
test("somar 2 +2 deve retornar 4", () => {
  const result = calculator.addiction(3, 2);
  expect(result).toBe(5);
})
