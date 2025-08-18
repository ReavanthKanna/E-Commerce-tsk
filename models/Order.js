import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [{ productId: String, quantity: Number }],
  shippingAddress: String,
  billingAddress: String,
  paymentMethod: { type: String, enum: ['COD', 'Online'] },
  status: { type: String, default: 'Processing' },
  invoiceUrl: String
}, { timestamps: true });

export default mongoose.model('Order', orderSchema);