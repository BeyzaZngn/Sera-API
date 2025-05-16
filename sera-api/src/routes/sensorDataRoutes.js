import express from 'express';
import {
  createSensorData,
  getSensorDataByGreenhouse
} from '../controllers/sensorDataController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/',        protect, createSensorData);
router.get('/:greenhouseId', protect, getSensorDataByGreenhouse);

export default router;