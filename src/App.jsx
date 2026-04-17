import { Routes, Route, Link } from 'react-router-dom';
import Inicio from './pages/Inicio';
import NuevaTarea from './pages/NuevaTarea';
import DetalleTarea from './pages/DetalleTarea';

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <nav style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
        <Link to="/">Inicio</Link>
        <Link to="/nueva">Crear Nueva Tarea</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nueva" element={<NuevaTarea />} />
        <Route path="/tarea/:id" element={<DetalleTarea />} />
      </Routes>
    </div>
  );
}

export default App;