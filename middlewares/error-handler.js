const { CustomAPIError } = require("../errors/custom-error");

if (err instanceof CustomAPIError) {
  return res.status(err.statusCode).json({ msg: err.message });
}

const errorHandlerMiddleware = (err, req, res, next) => {
  return res.status(500).json({ msg: "Something went wrong" });
};

module.exports = errorHandlerMiddleware;
