const asyncHandler = require( "express-async-handler")
const Order = require( "../models/order.js")
const update =asyncHandler(async (req, res) => {
  Order.findOneAndUpdate({_id :req.params.id}, {isDelivered : true}).then((order) => {
    res.json(req.params.id)
  }).catch((err)=>{
    res.json(err)
  })
  
})
const getUserOrders = asyncHandler(async (req, res) => {
  if (req.user) {
    const orders = await Order.find({ _id: req.params.id }).sort("-createdAt")

    if (orders) {
      res.json(orders)
    } else {
      res.status(404)
      throw new Error("No Orders Found!")
    }
  } else {
    res.status(404)
    throw new Error("No User Found!")
  }
})
const getUserOrdersId = asyncHandler(async (req, res) => {
  
    const orders = await Order.find({ user : req.params.id}).sort("-createdAt")

    if (orders) {
      res.json(orders)
    } else {
      res.status(404)
      throw new Error("No Orders Found!")
    }

})
const AdmingetUserOrders = asyncHandler(async (req, res) => {
  // if (req.user) {
    const orders = await Order.find().sort("-createdAt")

    if (orders) {
      res.json(orders)
    } else {
      res.status(404)
      throw new Error("No Orders Found!")
    }
  // } else {
  //   res.status(404)
  //   throw new Error("No User Found!")
  // }
})
//@desc Create Order
//@route POST /api/orders
//@access Private
const createOrder = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    shippingPrice,
    phoneNumber,
    totalPrice,
    userid
  } = req.body

  if (orderItems && orderItems.length === 0) {
    res.status(400)
    throw new Error("No Items Found!")
  } else {
    const order = new Order({
      user: userid,
      orderItems,
      shippingAddress,
      shippingPrice,
      phoneNumber,
      totalPrice,
    })

    const createdOrder =  await Order.create(order)

    res.status(201).json(createdOrder)
  }
})

//@desc Get order by id
//@route GET /api/orders/:id
//@access Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  )

  if (order) {
    res.json(order)
  } else {
    res.status(404)
    throw new Error("Order not found!")
  }
})

module.exports = { getUserOrders, update,createOrder,getUserOrdersId,AdmingetUserOrders, getOrderById }
