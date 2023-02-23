import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import Rodape from './components/rodape';
import Politica from './pages/PoliticaPrivacidade';
import OqueSomos from './pages/OqueSomos';
import Realizacoes from './pages/Realizacoes';
import Startups from './pages/Startups';
import FacaParte from './pages/FacaParte';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oqueSomos" element={<OqueSomos />} />
        <Route path="/quemSomos" element={<QuemSomos />} />
        <Route path="/realizacoes" element={<Realizacoes />} />
        <Route path="/startups" element={<Startups />} />
        <Route path="/facaParte" element={<FacaParte />} />

        <Route path="/*" element={<div>Página não encontrada</div>} />
        <Route path="/politica" element={<Politica />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}
