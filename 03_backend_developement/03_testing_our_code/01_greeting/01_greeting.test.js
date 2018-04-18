const greeting = require("./greeting");

test("hello WORLD", function() {
  const result = greeting();
  expect(result).toBe("Hello WORLD!");
});

test("test If", function () {
  const result = greeting("JU");
  expect(result).toBe("Hello JU!");
});
