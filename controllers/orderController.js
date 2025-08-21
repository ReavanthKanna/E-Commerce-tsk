import connectDB from '../models/Order.js';
import mongoose from 'mongoose';

// Place a new order
export const placeOrder = async (req, res) => {
    try {

      console.log(req.body);
        const order = new connectDB({
            user: req.body.user,
            items: req.body.items,
            totalAmount: req.body.totalAmount,
            paymentMethod: req.body.paymentMethod,
            address: req.body.address,
            status: 'Pending'
        });
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        console.error('Error placing order:', error);
        res.status(400).json({ message: error.message });
    }
};

// Get order by ID - Working
export const getOrderById = async (req, res) => {
    try { 
      const orderObjectId = new mongoose.Types.ObjectId(req.params.orderId);
      console.log(orderObjectId);
        if (!orderObjectId) return res.status(400).json({ message: 'Invalid order ID' });
        const order = await connectDB.find({_id: orderObjectId});
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.json(order);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all orders by user - Working
export const getOrdersByUser = async (req, res) => {
    try {

      const orderObjectId = new mongoose.Types.ObjectId(req.params.userId);
        if (!orderObjectId) return res.status(400).json({ message: 'Invalid user ID' });
        const orders = await connectDB.find({ userId: orderObjectId });
        res.json(orders);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update order status
export const updateOrderStatus = async (req, res) => {
    try {
        
        const orderObjectId = new mongoose.Types.ObjectId(req.params.orderId);
        if (!orderObjectId) return res.status(400).json({ message: 'Invalid user ID' });
        const order = await connectDB.findById(orderObjectId);
        if (!order) return res.status(404).json({ message: 'Order not found' });
        console.log(req.body.status);
        order.status = req.body.status;
        await order.save();
        res.json(order);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};