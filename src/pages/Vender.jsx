import { useState, createContext } from 'react';

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

  const infoViviendaAnimacion = (
    <InformacionVivienda toggleComponent={toggleComponent} />
  )

  const tipoViviendaAnimacion = (
    <TipoVivienda toggleComponent={toggleComponent} />
  )

  const relacionExteriorAnimacion = (
    <RelacionExterior toggleComponent={toggleComponent} />
  )

  const metrosCuadradosAnimacion = (
    <MetrosCuadrados toggleComponent={toggleComponent} />
  )

  const espaciosPrincipalesAnimacion = (
    <EspaciosPrincipales toggleComponent={toggleComponent} />
  )

  const espaciosComunesAnimacion = (
    <EspaciosComunes toggleComponent={toggleComponent} />
  )

  const estadoViviendaAnimacion = (
    <EstadoVivienda toggleComponent={toggleComponent} />
  )

  const porqueVenderAnimacion = (
    <PorqueVender toggleComponent={toggleComponent} />
  )

  const enviarContactoAnimacion = (
    <EnviarContacto toggleComponent={toggleComponent} />
  )

  const mensajeFinalAnimacion = (
    <MensajeFinal toggleComponent={toggleComponent} />
  )

  const renderFormulario = () => {
    console.log(formulario)
    switch (mostrarSiguiente) {
      case 1:
        return infoViviendaAnimacion
      case 2:
        return tipoViviendaAnimacion
      case 3:
        return relacionExteriorAnimacion
      case 4:
        return metrosCuadradosAnimacion
      case 5:
        return espaciosPrincipalesAnimacion
      case 6:
        return espaciosComunesAnimacion
      case 7:
        return estadoViviendaAnimacion
      case 8:
        return porqueVenderAnimacion
      case 9:
        return enviarContactoAnimacion
      case 10:
        return mensajeFinalAnimacion
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[url('images/Background2.svg')] bg-cover pt-20">
      <Header />
      <div className='w-full flex items-center justify-center'>
        <Context.Provider value={{ formulario, setFormulario }}>
          {renderFormulario()}
        </Context.Provider>
      </div>
    </main>
  );
}
