import express from 'express';

import hotelControllers from '../controllers/hotel.js';

const { getAllHotels, getHotel, createHotel, updateHotel, deleteHotel } =
    hotelControllers;

const router = express.Router();

// routes
router.get('/hotels', getAllHotels);
router.get('/hotels/:id', getHotel);
router.post('/hotels-create', createHotel);
router.put('/hotels/:id', updateHotel);
router.delete('/hotels/:id', deleteHotel);

export default router;
