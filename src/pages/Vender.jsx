import { useState } from 'react';
import Header from '../layout/Header';
import InformacionVivienda from '../components/venderahora/primero/InformacionVivienda';
import TipoVivienda from '../components/venderahora/segundo/TipoVivienda';
import { AnimatePresence, motion } from 'framer-motion';

export default function Vender() {
  const [mostrarSiguiente, setMostrarSiguiente] = useState(false);

  // Función para alternar los componentes
  const toggleComponent = () => {
    setMostrarSiguiente(!mostrarSiguiente);
  };

  return (
    <main className="flex h-screen items-center justify-center overflow-hidden bg-[url('images/Background2.svg')] bg-cover">
      <Header />
      <AnimatePresence>
        {!mostrarSiguiente ? (
          <motion.div
            key="informacionVivienda"
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 40 }}
          >
            <InformacionVivienda onSubmit={toggleComponent} />
            {/* <TipoVivienda onVolver={toggleComponent} /> */}
          </motion.div>
        ) : (
          <motion.div
            key="siguienteComponente"
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '-100vw' }}
            transition={{ type: 'spring', stiffness: 40}}
          >
            <TipoVivienda onVolver={toggleComponent} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
