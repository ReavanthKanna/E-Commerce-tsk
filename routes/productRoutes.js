import express from 'express';
import upload from '../middleware/upload.js';
import { protect } from '../middleware/authMiddleware.js';
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/ProductController.js';

const router = express.Router();

router.get('/', protect, getProducts);
router.get('/:id', protect, getProductById);
router.post('/', upload.any(), createProduct);
router.put('/:id', upload.any(), protect, updateProduct);
router.delete('/:id', protect, deleteProduct);

export default router;