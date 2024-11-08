import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import {Navbar }from './components/Navbar';
import{ AddHotel} from './components/hotel/AddHotel';
// import Hotel from './components/hotel/Hotel';
import {Hotels} from './components/hotel/Hotels';
import {Login }from './components/user/Login';
import {Logout }from './components/user/Logout';
import { Register} from './components/user/Register';


import './App.css';

const App = () => {
    return (
        <Router>
            <div>
                <Header title="Hotel Caruso" />
                <Navbar />
                <Routes>
                    {/* USER */}
                    <Route path="/register" element={<Register/>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    {/* HOTEL */}
                    <Route path="/" element={<Hotels />} />
                <Route path="/add" element={<AddHotel />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
