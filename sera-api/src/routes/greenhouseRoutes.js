import express from 'express';
import {
  createGreenhouse,
  getGreenhouses,
  getGreenhouseById,
  updateGreenhouse
} from '../controllers/greenhouseController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.route('/')
  .post(protect, createGreenhouse)
  .get(protect, getGreenhouses);

router.route('/:id')
  .get(protect, getGreenhouseById)
  .put(protect, updateGreenhouse);

export default router;