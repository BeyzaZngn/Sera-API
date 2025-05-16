import asyncHandler from 'express-async-handler';
import SensorData from '../models/sensorDataModel.js';

// Ekle
export const createSensorData = asyncHandler(async (req, res) => {
  const { greenhouseId, temperature, humidity } = req.body;
  const data = await SensorData.create({ greenhouseId, temperature, humidity });
  res.status(201).json(data);
});

// ID’ye göre getir
export const getSensorDataByGreenhouse = asyncHandler(async (req, res) => {
  const data = await SensorData.find({ greenhouseId: req.params.greenhouseId });
  res.json(data);
});