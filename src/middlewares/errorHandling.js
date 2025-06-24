function errorHandlingMiddleware(err, _req, res) {
  const status = err.status || 500
  const message = err.message || "Internal Server Error"
  return res.status(status).json({
    status: status,
    message: message
  })
}

module.exports = errorHandlingMiddleware
