import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Reservations from '../pages/reservations/Reservations';

export default function Routing() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/reservations' element={<Reservations />} />
        </Routes>
    );
};