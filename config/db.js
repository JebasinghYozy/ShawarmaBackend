const mongoose = require("mongoose")

exports.connectDb = async function  () {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })

    console.log(`Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error: ${error.message}`)
  }
}


