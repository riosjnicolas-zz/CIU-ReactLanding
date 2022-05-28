import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import Servicio from './components/Servicio';

function App() {

    //Creamos un state
    const [servicios, agregarServicios] = useState([
        { id:1, nombre:"Corte niño", valor:300 },
        { id:2, nombre:"Corte adulto", valor:600 },
        { id:3, nombre:"Tintura", valor:1000 }
    ]);

    return (
      <div>
          <Header />
            <h1>Peluqueria SA</h1>
            {
                servicios.map(servicio =>
                (
                    <Servicio
                        servicio={servicio}
                    />
                )
            )}
          
          <Footer
              fecha={2022}
          />
      </div>
  );
}

export default App;
