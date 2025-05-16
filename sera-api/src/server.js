import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import greenhouseRoutes from './routes/greenhouseRoutes.js';
import sensorDataRoutes from './routes/sensorDataRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    return res.json({ message: '🚀 Sera API çalışıyor!' });
  });

// API route’ları
app.use('/api/auth',         authRoutes);
app.use('/api/greenhouses',  greenhouseRoutes);
app.use('/api/sensor-data',  sensorDataRoutes);

// Hata middleware’leri
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server ${PORT} portunda çalışıyor`));