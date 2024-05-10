import { useState, createContext } from 'react';
import axios from 'axios';

import Header from '../layout/Header';

import InformacionVivienda from '../components/venderahora/primero/InformacionVivienda';
import TipoVivienda from '../components/venderahora/segundo/TipoVivienda';

import RelacionExterior from '../components/venderahora/tercero/RelacionExterior';
import MetrosCuadrados from '../components/venderahora/cuarto/MetrosCuadrados';

import EspaciosPrincipales from '../components/venderahora/quinto/EspaciosPrincipales';
import EspaciosComunes from '../components/venderahora/quinto/EspaciosComunes';

import EstadoVivienda from '../components/venderahora/sexto/EstadoVivienda';
import PorqueVender from '../components/venderahora/septimo/PorqueVender';
import EnviarContacto from '../components/venderahora/octavo/EnviarContacto';
import MensajeFinal from '../components/venderahora/final/MensajeFinal';

export const Context = createContext([]);

export default function Vender() {
  const [formulario, setFormulario] = useState([]);

  const [mostrarSiguiente, setMostrarSiguiente] = useState(1);

  const toggleComponent = () => {
    setMostrarSiguiente(mostrarSiguiente + 1);
  };
  
  const togglePrevious = () => {
    if (mostrarSiguiente > 1) {
      setMostrarSiguiente(mostrarSiguiente - 1);
    }
  };

  const enviarFormulario = (formularioInfo) => {
    axios
      .post('https://api.comproinmuebles.com/mail', {
        formulario: formularioInfo
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const infoViviendaAnimacion = (
    <InformacionVivienda toggleComponent={toggleComponent} />
  )

  const tipoViviendaAnimacion = (
    <TipoVivienda toggleComponent={toggleComponent} togglePrevious={togglePrevious} />
  )

  const relacionExteriorAnimacion = (
    <RelacionExterior toggleComponent={toggleComponent} togglePrevious={togglePrevious} />
  )

  const metrosCuadradosAnimacion = (
    <MetrosCuadrados toggleComponent={toggleComponent} togglePrevious={togglePrevious} />
  )

  const espaciosPrincipalesAnimacion = (
    <EspaciosPrincipales toggleComponent={toggleComponent} togglePrevious={togglePrevious} />
  )

  const espaciosComunesAnimacion = (
    <EspaciosComunes toggleComponent={toggleComponent} togglePrevious={togglePrevious} />
  )

  const estadoViviendaAnimacion = (
    <EstadoVivienda toggleComponent={toggleComponent} togglePrevious={togglePrevious} />
  )

  const porqueVenderAnimacion = (
    <PorqueVender toggleComponent={toggleComponent} togglePrevious={togglePrevious} />
  )

  const enviarContactoAnimacion = (
    <EnviarContacto toggleComponent={toggleComponent} togglePrevious={togglePrevious} />
  )

  const mensajeFinalAnimacion = (
    <MensajeFinal toggleComponent={toggleComponent} togglePrevious={togglePrevious} />
  )

  const renderFormulario = () => {
    console.log(formulario);
    switch (mostrarSiguiente) {
      case 1:
        return infoViviendaAnimacion;
      case 2:
        return tipoViviendaAnimacion;
      case 3:
        return relacionExteriorAnimacion;
      case 4:
        return metrosCuadradosAnimacion;
      case 5:
        return espaciosPrincipalesAnimacion;
      case 6:
        return espaciosComunesAnimacion;
      case 7:
        return estadoViviendaAnimacion;
      case 8:
        return porqueVenderAnimacion;
      case 9:
        return enviarContactoAnimacion;
      case 10:
        enviarFormulario(formulario);
        return mensajeFinalAnimacion;
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[url('images/Background2.svg')] bg-cover pt-20">
      <Header />
      <div className="flex w-full items-center justify-center">
        <Context.Provider value={{ formulario, setFormulario }}>{renderFormulario()}</Context.Provider>
      </div>
    </main>
  );
}
