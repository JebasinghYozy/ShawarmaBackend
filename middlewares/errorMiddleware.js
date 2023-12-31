exports.notFound = function (req, res, next)  {
  const error = new Error(`NOT FOUND => ${req.originalUrl}`)
  res.status(404)
  next(error)
}

//override the error handler
exports.errorHandler = function(err, req, res, next)  {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  })
}

// export { notFound, errorHandler }
