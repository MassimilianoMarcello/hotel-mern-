import { useState, useEffect } from 'react';
import axios from 'axios';
import './UserHotel.css';

const UserHotels = () => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // Funzione per gestire l'aggiornamento dell'hotel
    const handleUpdate = (hotelId) => {
        // Naviga alla pagina di aggiornamento con l'ID dell'hotel
        window.location.href = `/hotels/update/${hotelId}`;
    };

    // Funzione per gestire l'eliminazione dell'hotel
    const handleDelete = async (hotelId) => {
        if (window.confirm('Are you sure you want to delete this hotel?')) {
            try {
                // Chiamata DELETE al server per eliminare l'hotel
                await axios.delete(`http://localhost:5002/api/hotels/${hotelId}`, {
                    withCredentials: true,
                });
                alert('Hotel deleted successfully');
                // Ricarica la pagina o aggiorna la lista degli hotel
                window.location.reload();
            } catch (error) {
                alert('Failed to delete hotel');
                console.error('Error deleting hotel:', error);
            }
        }
    };

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
                            {/* Pulsante per richiedere aggiornamento hotel */}
                            <button onClick={() => handleUpdate(hotel._id)}>Update</button>
                            {/* Pulsante per eliminare hotel */}
                            <button onClick={() => handleDelete(hotel._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserHotels;

