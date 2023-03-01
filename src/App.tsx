import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './pages/Home/home';
import QuemSomos from './pages/QuemSomos/quemSomos';
import Rodape from './components/rodape/rodape';
import Realizacoes from './pages/Realizacoes/realizacoes';
import OqueSomos from './pages/OqueSomos/oQueSomos';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oqueSomos" element={<OqueSomos />} />
        <Route path="/quemSomos" element={<QuemSomos />} />
        <Route path="/realizacoes" element={<Realizacoes />} />
        <Route path="/*" element={<div>Página não encontrada</div>} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}
