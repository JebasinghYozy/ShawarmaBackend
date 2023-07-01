const jwt = require( "jsonwebtoken")
const asyncHandler = require( "express-async-handler")
const User = require( "../models/user.js")

const protectRoutes = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1]

      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      req.user = await User.findById(decoded.userId).select("-password")

      next()
    } catch {
      res.status(401)
      throw new Error("Not Authorized!")
    }
  }

  if (!token) {
    res.status(401)
    throw new Error("Not Authorized!")
  }
})

const adminProtect = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.status(401)
    throw new Error("Not Authorized, you need to be an admin!")
  }
}

module.exports = { protectRoutes, adminProtect }
