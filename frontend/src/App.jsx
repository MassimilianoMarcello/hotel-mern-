import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useEffect,useState} from 'react';
import Header from './components/Header';
import { Navbar } from './components/Navbar';
import { AddHotel } from './components/hotel/AddHotel';
 import UserHotels from './components/hotel/UserHotels';
import { Hotels } from './components/hotel/Hotels';
import { UpdateHotel } from './components/hotel/UpdateHotel';
import { Login } from './components/user/Login';
import { Logout } from './components/user/Logout';
import { Register } from './components/user/Register';

import './App.css';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        // Verifica se l'utente è loggato (ad esempio controllando se c'è un sessionStorage)
        if (sessionStorage.getItem('_id')) {
            setIsLoggedIn(true);
        }
    }, []);
    return (
        <Router>
            <div>
                <Header title="Hotel Caruso" />
                <Navbar />
                <Routes>
                    {/* USER */}
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    {/* HOTEL */}
                    <Route
                        path="/user-hotels"
                        element={isLoggedIn ? <UserHotels /> : <Login />}
                    />
                    <Route path="/hotels" element={<Hotels />} />
                    <Route path="/add" element={<AddHotel />} />
                    <Route
                        path="/hotels/update/:id"
                        element={<UpdateHotel />}
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
