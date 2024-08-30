import './App.css';

function App() {
  const nombre = <h1>Oscar Marcelo</h1>;
  const edad = <p>46 años</p>
  const ocupacion = <p><i><strong>Desarrollador Web</strong></i></p>
  return (
    <div className="App">
      <MostrarNombreComponente />
    </div>
  );
}

// el nombre de un componente inicia con mayuscula y es camellcase
const MostrarNombreComponente = () => {
  return <h1>Oscar Marcelo</h1>
}

export default App;
