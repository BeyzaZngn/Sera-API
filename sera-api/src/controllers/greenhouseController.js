import asyncHandler from 'express-async-handler';
import Greenhouse from '../models/greenhouseModel.js';

// Oluştur
export const createGreenhouse = asyncHandler(async (req, res) => {
  const { name, location, cropType } = req.body;
  const gh = await Greenhouse.create({
    name, location, cropType, userId: req.user._id
  });
  res.status(201).json(gh);
});

// Listele
export const getGreenhouses = asyncHandler(async (req, res) => {
  const list = await Greenhouse.find({ userId: req.user._id });
  res.json(list);
});

// Tekil
export const getGreenhouseById = asyncHandler(async (req, res) => {
  const gh = await Greenhouse.findById(req.params.id);
  if (!gh) { res.status(404); throw new Error('Sera bulunamadı'); }
  res.json(gh);
});

// Güncelle
export const updateGreenhouse = asyncHandler(async (req, res) => {
  const gh = await Greenhouse.findById(req.params.id);
  if (!gh) { res.status(404); throw new Error('Sera bulunamadı'); }
  gh.name     = req.body.name     || gh.name;
  gh.location = req.body.location || gh.location;
  gh.cropType = req.body.cropType || gh.cropType;
  const updated = await gh.save();
  res.json(updated);
});