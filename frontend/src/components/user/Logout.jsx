

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const performLogout = async () => {
            try {
                // Effettua la richiesta al backend per eliminare il cookie
                await axios.post('http://localhost:5002/api/logout', {}, { withCredentials: true });
                
                // Rimuovi i dati dal localStorage
                sessionStorage.removeItem('_id');
                sessionStorage.removeItem('email');
                
                // Reindirizza alla pagina di login
                navigate('/login');
                window.location.reload();
            } catch (error) {
                console.error('Errore durante il logout:', error);
            }
        };

        performLogout();
    }, [navigate]);

    return null;
};


