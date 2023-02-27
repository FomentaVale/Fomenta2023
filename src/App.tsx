import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import Rodape from './components/rodape';

<<<<<<< HEAD
import OqueSomos from './pages/OqueSomos';

=======
>>>>>>> main
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/oqueSomos" element={<OqueSomos />} />
        <Route path="/quemSomos" element={<QuemSomos />} />
        <Route path="/*" element={<div>Página não encontrada</div>} />
      </Routes>
      <Rodape />
=======
        <Route path="/quemSomos" element={<QuemSomos />} />
        <Route path="/*" element={<div>Página não encontrada</div>} />
      </Routes>
>>>>>>> main
    </BrowserRouter>
  );
}
