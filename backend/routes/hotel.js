import express from 'express';
import verifyToken from '../middleware/verifyToken.js';
import hotelControllers from '../controllers/hotel.js';

const { getAllHotels, getHotel, createHotel, updateHotel, deleteHotel,getUserHotels } =
    hotelControllers;

const router = express.Router();

// routes
router.get('/hotels', getAllHotels);
router.get('/hotels/:id', getHotel);
router.post('/hotels-create', createHotel);
router.put('/hotels/:id', updateHotel);
router.delete('/hotels/:id', deleteHotel);
router.get('/user-hotels', verifyToken, getUserHotels);


export default router;
