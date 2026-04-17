import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTareas } from '../context/useTareas';

function DetalleTarea() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tareas, eliminarTarea } = useTareas();
  
  const tarea = tareas.find(t => t.id === Number(id));

  if (!tarea) return <div>Tarea no encontrada. <Link to="/">Volver</Link></div>;

  const handleEliminar = () => {
    eliminarTarea(tarea.id);
    navigate('/');
  };

  return (
    <div>
      <Link to="/">Volver al inicio</Link>
      <h2>Detalle de la tarea: {tarea.titulo}</h2>
      <ul>
        <li><strong>Materia:</strong> {tarea.materia}</li>
        <li><strong>Fecha de entrega:</strong> {tarea.fecha}</li>
        <li><strong>Estado:</strong> {tarea.completada ? 'Completada' : 'Pendiente'}</li>
      </ul>
      <button onClick={handleEliminar} style={{ color: 'red' }}>Eliminar Tarea</button>
    </div>
  );
}

export default DetalleTarea;