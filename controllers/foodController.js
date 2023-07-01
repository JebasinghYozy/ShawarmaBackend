const Food = require( "../models/food.js")
const asyncHandler = require( "express-async-handler")

//@desc Get food list of a restaurant
//@route /api/restaurants/:id/food
//@access PUBLIC
const getFoodByRestaurant = asyncHandler(async (req, res) => {
  const foods = await Food.find({
    restaurant: req.params.id,
  })

  res.json(foods)
})

//@desc Get food list
//@route /api/foods
//@access PUBLIC
const getFoodList = asyncHandler(async (req, res) => {
  const foods = await Food.find({})

  res.json(foods)
})

//@desc Get food by id
//@route /api/foods/:id
//@access PUBLIC
const getFoodById = asyncHandler(async (req, res) => {
  const food = await Food.find({_id : req.params.id })
  // .populate("category")
  res.json(food)
})

module.exports = { getFoodByRestaurant, getFoodList, getFoodById }
