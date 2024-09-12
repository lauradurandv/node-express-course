const CustomAPIError = require("./custom-error");
const BadRequestError = require("./bad-request");
const unauthenticatedError = require("./unauthenticated");

module.exports = {
  CustomAPIError,
  BadRequestError,
  unauthenticatedError,
};
