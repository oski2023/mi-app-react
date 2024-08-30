import './App.css';
//ahora importamos el componente creado
import { Usuario } from './components/Usuario';

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


export default App;
