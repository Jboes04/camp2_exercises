const toWords = require("./to_words");

test(" Test ", function() {
  const result = toWords("");
  expect(result).toEqual([]);
});

test(" Test with sentence ex ", function() {
  const result = toWords("Hello I suck at ping pong!");
  expect(result).toEqual(["Hello", "I", "suck", "at", "ping", "pong"]);
});

test(" Test with sentence ex ", function() {
  const result = toWords("Hello I'm martin 2 at ping pong!");
  expect(result).toEqual(["Hello", "I", "m", "martin", "2", "at", "ping", "pong"]);
});
