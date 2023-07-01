const express = require( "express")
const {
  authUser,
  getUserProfile,
  updateUserProfile,
  createUser,
  getUsers,
  adminauthUser,
} = require( "../controllers/userController.js")
const { adminProtect, protectRoutes } = require( "../middlewares/authMiddleware.js")

const router = express.Router()

//route for create new user
router.route("/").post(createUser).get( getUsers)

//route for login
router.post("/login", authUser)
router.post("/admin", adminauthUser)

//route for get user profile
router
  .route("/profile")
  .get( getUserProfile)
  .put( updateUserProfile)

module.exports = router
