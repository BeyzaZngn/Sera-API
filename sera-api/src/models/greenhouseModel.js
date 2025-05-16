import mongoose from 'mongoose';

const greenhouseSchema = mongoose.Schema({
  name:      { type: String, required: true },
  location:  { type: String, required: true },
  cropType:  { type: String, required: true },
  userId:    { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
}, { timestamps: true });

export default mongoose.model('Greenhouse', greenhouseSchema);