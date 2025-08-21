import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
  addToCart,
  getCart,
  updateCartItem,
  removeCartItem
} from '../controllers/cartController.js';

const router = express.Router();

router.post('/add',protect, addToCart);
router.get('/',protect, getCart);
router.put('/update/:itemId',protect, updateCartItem);
router.delete('/remove/:itemId',protect, removeCartItem);

export default router;