const jwt = require( "jsonwebtoken")
const secret = "name"; // Replace "your-secret-key" with your actual secret key

const generateToken = (userId) => {  
  return jwt.sign({ userId },secret, {
    expiresIn: "30d",
  })
}

module.exports = generateToken
