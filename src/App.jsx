import './App.css';
import { useState } from 'react';

function App() {
  // Estados para cada campo de entrada
  const [nom, setNom] = useState('');
  const [mail, setMail] = useState('');

  // Manejador para el primer campo de entrada
  const actnom = (e) => {
    setNom(e.target.value);
  };

  // Manejador para el segundo campo de entrada
  const actmail = (e) => {
    setMail(e.target.value);
  };

  // Manejador del evento del botón
  const enviar = (e) => {
    e.preventDefault(); // Previene la recarga de la página
    console.log('Nombre:', nom);
    console.log('Correo:', mail);
  };

  return (
    <div>
      <form>
        <input 
          onChange={actnom} 
          value={nom} 
          type="text" 
          placeholder="Nombre" 
        />
        <input 
          onChange={actmail} 
          value={mail} 
          type="text" 
          placeholder="Correo" 
        />
        <button type="submit" onClick={enviar}>Enviar</button>
      </form>
    </div>
  );
}

export default App;
