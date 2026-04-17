import { useState, useEffect } from 'react';
import { tareasIniciales } from '../data/tareas';
import { TareasContext } from './tareasContextValue';

export function TareasProvider({ children }) {
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem('taskunpc-tareas');
    return guardadas ? JSON.parse(guardadas) : tareasIniciales;
  });

  useEffect(() => {
    localStorage.setItem('taskunpc-tareas', JSON.stringify(tareas));
  }, [tareas]);

  const toggleTarea = (id) => {
    setTareas(tareas.map(t => 
      t.id === id ? { ...t, completada: !t.completada } : t
    ));
  };

  const agregarTarea = (nuevaTarea) => {
    setTareas([...tareas, { ...nuevaTarea, id: Date.now(), completada: false }]);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(t => t.id !== Number(id)));
  };

  return (
    <TareasContext.Provider value={{ tareas, toggleTarea, agregarTarea, eliminarTarea }}>
      {children}
    </TareasContext.Provider>
  );
}