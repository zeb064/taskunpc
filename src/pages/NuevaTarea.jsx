import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTareas } from '../context/useTareas';

function NuevaTarea() {
  const { agregarTarea } = useTareas();
  const navigate = useNavigate();
  const [form, setForm] = useState({ titulo: '', materia: '', fecha: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.titulo || !form.materia || !form.fecha) return;
    agregarTarea(form);
    navigate('/');
  };

  return (
    <div>
      <Link to="/">Volver al inicio</Link>
      <h2>Agregar Nueva Tarea</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
        <input name="titulo" value={form.titulo} onChange={handleChange} placeholder="Título de la tarea" type="text" />
        <input name="materia" value={form.materia} onChange={handleChange} placeholder="Materia" type="text" />
        <input name="fecha" value={form.fecha} onChange={handleChange} type="date" />
        <button type="submit">Guardar Tarea</button>
      </form>
    </div>
  );
}

export default NuevaTarea;