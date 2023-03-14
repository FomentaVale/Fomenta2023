import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import QuemSomos from './pages/QuemSomos/quemSomos';
import Rodape from './components/rodape/rodape';
import Realizacoes from './pages/Realizacoes/realizacoes';
import OqueSomos from './pages/OqueSomos/oQueSomos';
import Pagina404 from './pages/pagina404/pagina404';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oqueSomos" element={<OqueSomos />} />
        <Route path="/quemSomos" element={<QuemSomos />} />
        <Route path="/realizacoes" element={<Realizacoes />} />
        <Route path="/*" element={<Pagina404 />} />
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}
