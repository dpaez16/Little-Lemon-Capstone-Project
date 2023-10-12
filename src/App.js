import Navbar from './components/navbar/Navbar';
import Routing from './components/routing/Routing';
import Footer from './components/footer/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';

function App() {
    return (
        <>
        <ChakraProvider>
        <Router>
            <Navbar />
            <Routing />
            <Footer />
        </Router>
        </ChakraProvider>
        </>
    );
}

export default App;
