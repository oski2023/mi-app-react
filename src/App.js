import './App.css';

function App() {
  /* const nombre = <h1>Oscar Marcelo</h1>;
  const edad = <p>46 años</p>
  const ocupacion = <p><i><strong>Desarrollador Web</strong></i></p> */
  return (
    <div className="App">
      <Usuario />
    </div>
  );
}

//creamos un componente
const Usuario = () => {
  return <div>
            <h1>Nombre: Oscar</h1>
            <p>Edad: 46 años</p>
            <p>Ocupacion: Desarrollador</p>
          </div>
}
export default App;
