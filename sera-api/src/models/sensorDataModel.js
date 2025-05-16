import mongoose from 'mongoose';

const sensorDataSchema = mongoose.Schema({
  greenhouseId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Greenhouse' },
  temperature:  { type: Number, required: true },
  humidity:     { type: Number, required: true },
  timestamp:    { type: Date, default: Date.now },
});

export default mongoose.model('SensorData', sensorDataSchema);