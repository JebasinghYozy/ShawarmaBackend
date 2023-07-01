const express = require( "express")
const { getFoodById, getFoodList } = require( "../controllers/foodController.js")

const router = express.Router()

router.get("/", getFoodList)
router.get("/:id", getFoodById)

module.exports = router
