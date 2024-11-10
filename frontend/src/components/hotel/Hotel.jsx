import PropTypes from 'prop-types';
import axios from 'axios';
import './Hotel.css';

const Hotel = ({ hotel }) => {
    // Se hotel è undefined o null, non renderizzare nulla
    if (!hotel) {
        return null;
    }

    // Funzione per gestire l'aggiornamento dell'hotel
    const handleUpdate = () => {
        // Naviga alla pagina di aggiornamento con l'ID dell'hotel
        window.location.href = `/hotels/update/${hotel._id}`;
    };

    // Funzione per gestire l'eliminazione dell'hotel
    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this hotel?')) {
            try {
                // Chiamata DELETE al server per eliminare l'hotel
                await axios.delete(`http://localhost:5002/api/hotels/${hotel._id}`, {
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

    return (
        <div className="hotel-card">
            <div className="image-container">
                {/* Mostra l'immagine dell'hotel, se non disponibile una di default */}
                <img
                    src={hotel.image || 'default-image-url.jpg'}
                    alt={hotel.name || 'Hotel Image'}
                />
            </div>

            {/* Verifica che hotel.name esista e visualizza altrimenti un valore di fallback */}
            <h3>{hotel.name || 'Untitled Hotel'}</h3>
            <h3>Price:{hotel.price ? `${hotel.price} €` : 'Unpriced Hotel'}</h3>

            {/* Controlla se category, description e image esistono */}
            <p>{hotel.category || 'Unknown Category'}</p>
            <p>{hotel.description || 'No description available'}</p>

            {/* Pulsante per richiedere aggiornamento hotel */}
            <button onClick={handleUpdate}>Update</button>
            {/* Pulsante per eliminare hotel */}
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

// Definizione dei tipi di prop del componente
Hotel.propTypes = {
    hotel: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string,
        category: PropTypes.string,
        price: PropTypes.number,
        description: PropTypes.string,
        image: PropTypes.string,
    }),
};

export default Hotel;





