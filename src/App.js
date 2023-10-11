import Navbar from './components/navbar/Navbar';
import Routing from './components/routing/Routing';
import Footer from './components/footer/Footer';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';

function App() {
    return (
        <>
        <ChakraProvider>
            <Navbar />
            <Routing />
            <Footer />
        </ChakraProvider>
        </>
    );
}

export default App;
