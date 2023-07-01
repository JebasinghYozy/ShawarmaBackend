const express = require( "express")
const {
  createOrder,
  getOrderById,
  update,
  getUserOrders,
  AdmingetUserOrders,getUserOrdersId
} = require( "../controllers/orderController.js")
const { protectRoutes } = require( "../middlewares/authMiddleware.js")

const router = express.Router()
update
router
.route("/update/:id")
.post( update)
router
  .route("/")
  .get( getUserOrders)
  .post( createOrder)
  router
  .route("/user/:id")
  .get( getUserOrdersId)
  router
  .route("/admin")
  .get( AdmingetUserOrders)
  
router.route("/:id").get( getOrderById)

module.exports = router
