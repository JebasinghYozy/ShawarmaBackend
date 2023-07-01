const express = require("express")
const {
  getRestaurants,
  getRestaurantById,
  getCities,
} = require("../controllers/restaurantController.js")

const { getFoodByRestaurant } = require("../controllers/foodController.js")

const router = express.Router()

router.get("/", getRestaurants)

router.get("/cities", getCities)

router.get("/:id", getRestaurantById)

router.get("/:id/foods", getFoodByRestaurant)

module.exports = router;
 
