import { Link } from 'react-router-dom';

function TareaCard({ id, titulo, materia, fecha, completada, onToggle }) {
  return (
    <article className={`tarea-card ${completada ? 'completada' : ''}`} style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
      <h3>{titulo}</h3>
      <p>{materia} - {fecha}</p>
      <label>
        <input 
          type="checkbox" 
          checked={completada} 
          onChange={() => onToggle(id)} 
        />
        {completada ? 'Completada' : 'Pendiente'}
      </label>
      <div style={{ marginTop: '10px' }}>
        <Link to={`/tarea/${id}`}>Ver detalle</Link>
      </div>
    </article>
  );
}

export default TareaCard;