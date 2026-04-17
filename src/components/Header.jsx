function Header({ totalPendientes }) {
    return (
      <header>
        <h1>TaskUPC</h1>
        <p>Tareas pendientes: {totalPendientes}</p>
      </header>
    );
  }
  
  export default Header;