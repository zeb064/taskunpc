import TareaCard from './TareaCard';

function ListaTareas({ tareas, onToggle }) {
  if (tareas.length === 0) return <p>No hay tareas para mostrar.</p>;

  return (
    <section>
      {tareas.map(tarea => (
        <TareaCard 
          key={tarea.id} 
          {...tarea} 
          onToggle={onToggle} 
        />
      ))}
    </section>
  );
}

export default ListaTareas;