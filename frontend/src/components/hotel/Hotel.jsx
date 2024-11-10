import PropTypes from 'prop-types';

import './Hotel.css';

const Hotel = ({ hotel }) => {
    // Se hotel è undefined o null, non renderizzare nulla
    if (!hotel) {
        return null;
    }





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





