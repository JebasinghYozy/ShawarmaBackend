const express = require("express");
const mongoose = require("mongoose")

const dotenv = require("dotenv")
const { errorHandler, notFound } = require( "./middlewares/errorMiddleware.js")
// const connectDb  =  require("./config/db.js");
const restaurantRoutes  = require( "./routes/restaurantRoutes.js");
const userRoutes  = require( "./routes/userRoutes.js");
const foodRoutes  =  require("./routes/foodRoutes.js");
const orderRoutes  = require( "./routes/orderRoutes.js");
//load .env file to process.env
dotenv.config()

//connect to mongodb
mongoose.connect(
  "mongodb://localhost:27017/Company",
  () => {
    console.log("db conntect successfully");
  },
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true }
);

const app = express()

//to parse json
app.use(express.json())

//restaurants routes
app.use("/api/restaurants", restaurantRoutes)

//food routes
app.use("/api/foods", foodRoutes)

//users routes
app.use("/api/users", userRoutes)

//orders routes
app.use("/api/orders", orderRoutes)

//404 Error, if the url not found
app.use(notFound)

//Error Handling
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
})
