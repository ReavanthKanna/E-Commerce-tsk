import express from 'express';
import {
  placeOrder, getOrderById, getOrdersByUser, updateOrderStatus
} from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/',  placeOrder);
router.get('/:orderId', getOrderById);
router.get('/user/:userId', protect, getOrdersByUser);
router.put('/:orderId/status', updateOrderStatus);

export default router;