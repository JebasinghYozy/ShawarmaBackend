const asyncHandler = require( "express-async-handler")
const Restaurant  = require( "../models/restaurant.js")

//@desc Fetch all restaurants
//@route /api/restaurants
//@access Public
const getRestaurants = asyncHandler(async (req, res) => {
  const restaurants = await Restaurant.find({})
  res.json(restaurants)
})

//@desc Fetch a single restaurant by Id
//@route /api/restaurants/:id
//@access Public
const getRestaurantById = asyncHandler(async (req, res) => {
  const id = req.params.id
  const restaurant = await Restaurant.findById(id)

  res.json(restaurant)
})
const createUser = asyncHandler(async (req, res) => {
const Restaurant = await Restaurant.create({
  name,
  email,
  password,
  role,
})
})
//@desc Fetch cities
//@route /api/restaurants/cities
//@access Public
const getCities = asyncHandler(async (req, res) => {
  const cities = await Restaurant.find({})
    .distinct("ville")
    .select({ ville: 1 })
  console.log(cities)
  res.json(cities)
})

module.exports = { getRestaurants, getRestaurantById, getCities }
