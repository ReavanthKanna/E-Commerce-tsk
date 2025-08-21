import app from './app.js';
import dotenv from 'dotenv';
import cloudinary from './config/cloudinary.js';

    dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
cloudinary.api.ping()
  .then(() => {
    console.log('✅ Cloudinary connected successfully');
  })
  .catch((error) => {
    console.error('❌ Cloudinary connection failed:', error.message);
  });