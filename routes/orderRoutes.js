import express from 'express';
import {
  placeOrder, getOrderById, getUserOrders, updateOrderStatus
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();


router.post('/', protect, placeOrder);
router.get('/:orderId', protect, getOrderById);
router.get('/userOrder/:userId', protect, getUserOrders);
router.put('/:orderId/status', protect, updateOrderStatus);

export default router;