import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';

export default function Routing() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    );
};