import Hotel from '../models/hotel.js';

const HotelControllers = {
    getAllHotels: async (req, res) => {
        try {
            const hotels = await Hotel.find();
            res.status(200).json(hotels);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    getHotel: async (req, res) => {
        const { id } = req.params;
        try {
            const hotel = await Hotel.findById(id);
            if (!hotel) {
                return res.status(404).json({ message: 'Hotel not found' });
            }
            res.status(200).json(hotel);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    createHotel: async (req, res) => {
        const { name, description, category, image, price, user_id } = req.body;
        try {
            if (name && description && category && image && price && user_id) {
                const newHotel = await Hotel.create({
                    name,
                    description,
                    category,
                    image,
                    price,
                    user_id
                });
                res.status(201).json(newHotel);
            } else {
                res.status(400).json({ message: "All fields are required." });
            }
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },
    
    updateHotel: async (req, res) => {
        const { id } = req.params;
        const { name, description, category, image, price } = req.body;
        try {
            const updatedHotel = await Hotel.findOneAndUpdate(
                { _id: id },
                { name, description, category, image, price },
                { new: true }  // Restituisce il documento aggiornato
            );
    
            if (!updatedHotel) {
                return res.status(404).json({ message: 'Hotel not found' });
            }
    
            res.status(200).json(updatedHotel);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    
    deleteHotel: async (req, res) => {
        const { id } = req.params;
        try {
            const deletedHotel = await Hotel.findOneAndDelete({ _id: id });
            if (!deletedHotel) {
                return res.status(404).json({ message: 'Hotel not found' });
            }
            res.status(200).json({ message: 'Hotel deleted successfully' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
    
};

export default HotelControllers;
