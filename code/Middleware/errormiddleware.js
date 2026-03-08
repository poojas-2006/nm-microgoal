const errorMiddleware = (err, req, res, next) => {
  console.error(err);

  const status = err.status || 500;
  const message = err.message || "Server Error";

  return res.status(status).json({
    success: false,
    message,
  });
};

module.exports = errorMiddleware;