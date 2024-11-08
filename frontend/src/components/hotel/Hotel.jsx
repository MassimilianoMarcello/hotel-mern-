import PropTypes from 'prop-types';
import './Hotel.css';

const Hotel = ({ hotel, onDelete, onUpdateRequest }) => {
    // Se hotel è undefined o null, non renderizzare nulla
    if (!hotel) {
        return null;
    }

    return (
        <div className="hotel-card">
            <div className="image-container">
                {/* Mostra l'immagine del hotel, se non disponibile una di default */}
                <img 
                    src={hotel.image || 'default-image-url.jpg'} 
                    alt={hotel.name || 'Hotel Image'} 
                />
            </div>

            {/* Verifica che hotel.name esista e visualizza altrimenti un valore di fallback */}
            <h3>{hotel.name || 'Untitled Hotel'}</h3>
            
            {/* Controlla se category, description e image esistono */}
            <p>{hotel.category || 'Unknown Category'}</p>
            <p>{hotel.description || 'No description available'}</p>
            
            {/* Pulsante per richiedere aggiornamento hotel */}
            <button onClick={() => onUpdateRequest(hotel)}>Update</button>
            {/* Pulsante per eliminare hotel */}
            <button onClick={() => onDelete(hotel._id)}>Delete</button>
        </div>
    );
};

// Definizione dei tipi di prop del componente
Hotel.propTypes = {
    hotel: PropTypes.shape({
        _id: PropTypes.string.isRequired, // ID obbligatorio per ogni hotel
        name: PropTypes.string,           // Nome dell'hotel (facoltativo)
        category: PropTypes.string,       // Categoria dell'hotel (facoltativo)
        description: PropTypes.string,    // Descrizione dell'hotel (facoltativo)
        image: PropTypes.string,          // URL immagine dell'hotel (facoltativo)
    }),
    onDelete: PropTypes.func.isRequired,   // Funzione richiesta per eliminare un hotel
    onUpdateRequest: PropTypes.func.isRequired, // Funzione richiesta per aggiornare un hotel
};

export default Hotel;




