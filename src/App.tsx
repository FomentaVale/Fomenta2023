import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import Rodape from './components/rodape';

const theme = extendTheme({
  colors: {
    cor: {
      P1: '#008177',
      P2: '#00a99d',
      P3: '#f7941d',
      S1: '#003b33',
      S2: '#005349',
      S3: '#f37021',
      S4: '#fdb913',
    },
  },
});

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quemSomos" element={<QuemSomos />} />
        <Route path="/*" element={<div>Página não encontrada</div>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}
