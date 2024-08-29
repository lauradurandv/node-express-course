const { CustomAPIError } = require("../erros/custom-error");

const errorHandler = (error, req, res, next) => {
  //if our custom error
  if (error instanceof CustomAPIError) {
    return res.status(error.statusCode).json({ msg: error.message });
  }
  return res.status(500).json({
    msg: `Something went wrong please try again.`,
  });
};

module.exports = errorHandler;
