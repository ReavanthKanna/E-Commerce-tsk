import Order from '../models/Order.js';

export const placeOrder = async (req, res) => {
  const order = await Order.create({ ...req.body, user: req.user._id });
  res.json(order);
};

export const getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.orderId).populate('user');
  if (order) res.json(order);
  else res.status(404).json({ message: 'Order not found' });
};

export const getUserOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
};

export const updateOrderStatus = async (req, res) => {
  const order = await Order.findById(req.params.orderId);
  if (order) {
    order.status = req.body.status;
    await order.save();
    res.json(order);
  } else {
    res.status(404).json({ message: 'Order not found' });
  }

};

controllers/orderController.js

