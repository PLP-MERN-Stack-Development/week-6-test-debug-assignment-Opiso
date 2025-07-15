import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bugRoutes from './routes/bugRoutes.js';
import errorHandler from './middlewares/errorHandler.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/bugs', bugRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server on port ${PORT}`));
  })
  .catch(err => console.error('DB Error:', err));
