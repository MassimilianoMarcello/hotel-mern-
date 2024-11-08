import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddHotel.css';

export const AddHotel = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState('');

    const submitForm = async (e) => {
        e.preventDefault();

        const user_id = localStorage.getItem('_id'); // recupera l'ID dell'utente dal localStorage

        if (name && category && description && image && user_id) {
            try {
                const res = await axios.post(
                    'http://localhost:5002/api/hotels-create',
                    { name, category, description, image, user_id }, 
                    { withCredentials: true }
                );

                if (res.status === 201) {
                    navigate('/hotels');
                }
            // eslint-disable-next-line no-unused-vars
            } catch (err) {
                setError('Failed to add hotel. Please try again later.');
            }
        } else {
            setError('Please fill in all fields');
        }
    };

    return (
        <div className="add-hotel">
            <form onSubmit={submitForm}>
                <label htmlFor="name">Hotel Name</label>
                
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="category">Category</label>
                <input
                    type="text"
                    id="category"
                    name="category"
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />

                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <label htmlFor="image">Image URL</label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    required
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />

                {error && <div className="error">{error}</div>}
                <button type="submit">Add Hotel</button>
            </form>
        </div>
    );
};










