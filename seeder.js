const Restaurant = require( "./models/restaurant.js")
// const User = require( "./models/user.js")
// const Category = require( "./models/category.js")
// const Food = require( "./models/food.js")
const restaurants = [
  {
    name: "Coin Sandwich",
    description:
      " Integer viverra lacus sit amet ex elementum, eget facilisis nulla sagittis. Nam commodo lacus sem. Vestibulum eleifend nunc sed molestie pharetra.",
    picture: "/images/coin_sandwich.jpg",
    address: "Casablanca oulfa",
    ville: "Casablanca",
    phone: "0599885943",
    rating: 4.0,
    numReviews: 8,
  },
]
// const restaurants = require( "./data/restaurants.js")
// const users = require( "./data/users.js")
// const categories = require( "./data/categories.js")
// const foodList = require("./data/food.js")
const dotenv = require( "dotenv")
const connectDb = require( "./config/db.js")
const mongoose = require("mongoose")

//load .env content to process.env
dotenv.config()

//connect to db
mongoose.connect(
  "mongodb://localhost:27017/Company",
  () => {
    console.log("db conntect successfully");
  },
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true }
);

const constData = async () => {
  try {
    //delete all users & restaurants if there is records in the db
    // await User.deleteMany()
    await Restaurant.deleteMany()
    // await Food.deleteMany()
    // await Category.deleteMany()

    //create many users & get the array result
    // const createdUsers = await User.insertMany(users)

    //get the id of the admin (first index)
    // const admin = createdUsers[0]._id
    const admin = "6497bf847fa3bd5dc02176df"

    //add admin as user who created the restaurant to all restaurants
    const restaurantsList = restaurants.map((restaurant) => {
      return {
        ...restaurant,
        user: admin,
      }
    })

    //insert restaurants & category & food
    await Restaurant.insertMany(restaurantsList)

    // const createdCategories = await Category.insertMany(categories)
    // const newFoodList = foodList.map((food) => {
    //   return {
    //     ...food,
    //     category: createdCategories[0]._id,
    //   }
    // })

    // await Food.insertMany(foodList)

    console.log("Data consted!")
    process.exit()
  } catch (error) {
    console.log(`Error while consting data: ${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Restaurant.deleteMany()
    await User.deleteMany()
    await Category.deleteMany()
    await Food.deleteMany()

    console.log("Data Destroyed")
    process.exit()
  } catch (error) {
    console.log(`Error while Destroying data: ${error}`)
    process.exit(1)
  }
}
constData()
// if (process.argv[2] === "-d") {
//   destroyData()
// } else {
//   constData()
// }
