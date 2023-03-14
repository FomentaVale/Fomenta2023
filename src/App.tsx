import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import QuemSomos from './pages/QuemSomos/quemSomos';
import Rodape from './components/rodape/rodape';
import Realizacoes from './pages/Realizacoes/realizacoes';
import OqueSomos from './pages/OqueSomos/oQueSomos';
import Pagina404 from './pages/pagina404/pagina404';
import Coworking from './pages/Coworking/coworking';
import FacaParte from './pages/FacaParte/facaParte';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oqueSomos" element={<OqueSomos />} />
        <Route path="/quemSomos" element={<QuemSomos />} />
        <Route path="/realizacoes" element={<Realizacoes />} />
        <Route path="/coworking" element={<Coworking />} />
        <Route path="/facaParte" element={<FacaParte />} />
        <Route path="/*" element={<Pagina404 />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}
