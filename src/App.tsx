import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import Rodape from './components/rodape';
import Realizacoes from './pages/Realizacoes';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quemSomos" element={<QuemSomos />} />
        <Route path="/realizacoes" element={<Realizacoes />} />
        <Route path="/*" element={<div>Página não encontrada</div>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}
