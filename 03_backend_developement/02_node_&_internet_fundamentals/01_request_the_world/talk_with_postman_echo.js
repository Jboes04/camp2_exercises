const request = require("request");

function simpleGet(callback) {

  request(
    {
      url: "https://postman-echo.com/get",
      method: "GET"
    },
    function (error, response, result) {
      callback(result);
    }
  );
}

function displayResult(result) {
  console.log(result);
  return result;
}

simpleGet(displayResult);

function simpleGetWithParams(callback) {

  request(
    {
      url: "https://postman-echo.com/get?foo=bar&program=camp2&people[]=Frieda&people[]=Francis",
      method: "GET"
    },
    function (error, response, result) {
      callback(JSON.parse(result).args);
    }
  );
}

function displayResultWithParams(result) {
  console.log(result);
  return result;
}

simpleGetWithParams(displayResultWithParams);

function validateTimestamp(callback) {
  const date = new Date();
  const dateOk = date.getFullYear()+ "-" + (date.getMonth() + 1) + "-" + date.getDay();
  request(
    {
      url: `https://postman-echo.com/time/valid?timestamp=${dateOk}`,
      method: "GET"
    },
    function (error, response, result) {
      callback(result);
    }
  );
}

function displayResultWithTime(result) {
  console.log(result);
  return result;
}

validateTimestamp(displayResultWithTime);

module.exports = {
  simpleGet:  simpleGet,
  displayResult:  displayResult,
  simpleGetWithParams: simpleGetWithParams,
  displayResultWithParams: displayResultWithParams,
  validateTimestamp: validateTimestamp,
  displayResultWithTime: displayResultWithTime
};
