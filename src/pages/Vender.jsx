import { useState } from 'react';
import Header from '../layout/Header';
import InformacionVivienda from '../components/venderahora/primero/InformacionVivienda';
import TipoVivienda from '../components/venderahora/segundo/TipoVivienda';
import { AnimatePresence, motion } from 'framer-motion';

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
      <InformacionVivienda onSubmit={toggleComponent} />
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
      <TipoVivienda onSubmit={toggleComponent} />
    </motion.div>
  )

  const renderFormulario = () => {
    switch (mostrarSiguiente) {
      case 1:
        return infoViviendaAnimacion
      case 2:
        return tipoViviendaAnimacion
      case 3:
        return tipoViviendaAnimacion
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
