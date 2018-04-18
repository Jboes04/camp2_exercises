const helloSailor = require("./hello_sailor");

test(" howdy name", function() {
  console.log = jest.fn();
  helloSailor("julian");
  expect(console.log).toHaveBeenCalledWith("Howdy julian!");
});

test(" howdy sailor", function() {
  console.log = jest.fn();
  helloSailor();
  expect(console.log).toHaveBeenCalledWith("Howdy Sailor! Good day to you!");
});
