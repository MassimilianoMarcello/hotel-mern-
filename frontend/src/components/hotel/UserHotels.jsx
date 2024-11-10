import { useState, useEffect } from 'react';
import axios from 'axios';
import  './UserHotel.css';

const UserHotels = () => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Funzione per ottenere gli hotel dell'utente loggato
    const fetchUserHotels = async () => {
        try {
            const response = await axios.get('http://localhost:5002/api/user-hotels', {
                withCredentials: true,
            });
            setHotels(response.data);
            setLoading(false);
        // eslint-disable-next-line no-unused-vars
        } catch (err) {
            setError('Unable to fetch hotels');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUserHotels();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div>
            <h2>Your Hotels</h2>
            {hotels.length === 0 ? (
                <p>No hotels found.</p>
            ) : (
                <ul>
                    {hotels.map((hotel) => (
                        <li key={hotel._id}>
                            <h3>{hotel.name}</h3>
                            <p>{hotel.description}</p>
                            <p>Category: {hotel.category}</p>
                            <p>Price: ${hotel.price}</p>
                            <img src={hotel.image} alt={hotel.name} style={{ width: '200px' }} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserHotels;
