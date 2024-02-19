import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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

export default function Vender() {
  const [mostrarSiguiente, setMostrarSiguiente] = useState(1);

  // Función para alternar los componentes
  const toggleComponent = () => {
    setMostrarSiguiente(mostrarSiguiente + 1);
  };

  const infoViviendaAnimacion = (
    <motion.div
      key="informacionVivienda"
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      exit={{ x: 0 }}
      transition={{ stiffness: 200, duration: 0.6 }}
    >
      <InformacionVivienda toggleComponent={toggleComponent} />
      {/* <TipoVivienda onVolver={toggleComponent} /> */}
    </motion.div>

  )

  const tipoViviendaAnimacion = (
    <motion.div
      key="siguienteComponente"
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      exit={{ x: '-100vw' }}
      transition={{ stiffness: 200, duration: 0.6 }}
    >
      <TipoVivienda toggleComponent={toggleComponent} />
    </motion.div>
  )

  const relacionExteriorAnimacion = (
    <motion.div
      key="siguienteComponente"
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      exit={{ x: '-100vw' }}
      transition={{ stiffness: 200, duration: 0.6 }}
    >
      <RelacionExterior toggleComponent={toggleComponent} />
    </motion.div>
  )

  const metrosCuadradosAnimacion = (
    <motion.div
      key="siguienteComponente"
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      exit={{ x: '-100vw' }}
      transition={{ stiffness: 200, duration: 0.6 }}
    >
      <MetrosCuadrados toggleComponent={toggleComponent} />
    </motion.div>
  )

  const espaciosPrincipalesAnimacion = (
    <motion.div
      key="siguienteComponente"
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      exit={{ x: '-100vw' }}
      transition={{ stiffness: 200, duration: 0.6 }}
    >
      <EspaciosPrincipales toggleComponent={toggleComponent} />
    </motion.div>
  )

  const espaciosComunesAnimacion = (
    <motion.div
      key="siguienteComponente"
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      exit={{ x: '-100vw' }}
      transition={{ stiffness: 200, duration: 0.6 }}
    >
      <EspaciosComunes toggleComponent={toggleComponent} />
    </motion.div>
  )

  const estadoViviendaAnimacion = (
    <motion.div
      key="siguienteComponente"
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      exit={{ x: '-100vw' }}
      transition={{ stiffness: 200, duration: 0.6 }}
    >
      <EstadoVivienda toggleComponent={toggleComponent} />
    </motion.div>
  )

  const porqueVenderAnimacion = (
    <motion.div
      key="siguienteComponente"
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      exit={{ x: '-100vw' }}
      transition={{ stiffness: 200, duration: 0.6 }}
    >
      <PorqueVender toggleComponent={toggleComponent} />
    </motion.div>
  )

  const enviarContactoAnimacion = (
    <motion.div
      key="siguienteComponente"
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      exit={{ x: '-100vw' }}
      transition={{ stiffness: 200, duration: 0.6 }}
    >
      <EnviarContacto toggleComponent={toggleComponent} />
    </motion.div>
  )

  const renderFormulario = () => {
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
    }
  }

  return (
    <main className="flex h-screen items-center justify-center overflow-hidden bg-[url('images/Background2.svg')] bg-cover">
      <Header />
      <AnimatePresence>
        {renderFormulario()}
      </AnimatePresence>
    </main>
  );
}
