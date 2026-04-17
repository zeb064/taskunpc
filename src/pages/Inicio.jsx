import { useState } from 'react';
import { useTareas } from '../context/TareasContext';
import Header from '../components/Header';
import ListaTareas from '../components/ListaTareas';

function Inicio() {
  const { tareas, toggleTarea } = useTareas();
  const [filtro, setFiltro] = useState('todas');

  const tareasFiltradas = tareas.filter(t => {
    if (filtro === 'pendientes') return !t.completada;
    if (filtro === 'completadas') return t.completada;
    return true;
  });

  const pendientes = tareas.filter(t => !t.completada).length;

  return (
    <div>
      <Header totalPendientes={pendientes} />
      
      <div style={{ margin: '1rem 0' }}>
        <button onClick={() => setFiltro('todas')}>Todas</button>
        <button onClick={() => setFiltro('pendientes')}>Pendientes</button>
        <button onClick={() => setFiltro('completadas')}>Completadas</button>
      </div>

      <ListaTareas tareas={tareasFiltradas} onToggle={toggleTarea} />
    </div>
  );
}

export default Inicio;