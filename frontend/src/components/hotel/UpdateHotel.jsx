import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './UpdateHotel.css';

export const UpdateHotel = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // Otteniamo l'ID dell'hotel dai parametri dell'URL

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState(0);
    const [error, setError] = useState('');

    // Effettua una chiamata per ottenere i dati dell'hotel esistente
    useEffect(() => {
        const fetchHotel = async () => {
            try {
                const res = await axios.get(`http://localhost:5002/api/hotels/${id}`);
                const hotel = res.data;
                setName(hotel.name);
                setCategory(hotel.category);
                setDescription(hotel.description);
                setImage(hotel.image);
                setPrice(hotel.price || 0) ;
            // eslint-disable-next-line no-unused-vars
            } catch (err) {
                setError('Failed to fetch hotel data.');
            }
        };

        fetchHotel();
    }, [id]);

    // Funzione per inviare i dati aggiornati
    const submitForm = async (e) => {
        e.preventDefault();

        if (name && category && description && image && price) {
            try {
                const res = await axios.put(
                    `http://localhost:5002/api/hotels/${id}`,
                    { name, category, description, image, price },
                    { withCredentials: true }
                );

                if (res.status === 200) {
                    navigate('/hotels');
                }
            // eslint-disable-next-line no-unused-vars
            } catch (err) {
                setError('Failed to update hotel. Please try again later.');
            }
        } else {
            setError('Please fill in all fields');
        }
    };

    return (
        <div className="update-hotel">
            <h2>Update Hotel</h2>
            <form onSubmit={submitForm}>
                <label htmlFor="name">Hotel Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="category">Category</label>
                <input
                    type="text"
                    id="category"
                    name="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />

                <label htmlFor="price">Price</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    required
                />

                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />

                <label htmlFor="image">Image URL</label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                />

                {error && <div className="error">{error}</div>}
                <button type="submit">Update Hotel</button>
            </form>
        </div>
    );
};
