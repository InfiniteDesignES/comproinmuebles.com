import Header from '../../layout/Header';
import TipoVivienda from '../../components/venderahora/segundo/TipoVivienda';

import { motion } from 'framer-motion';

export default function Vender() {
  return (
    <main className="flex h-screen items-center justify-center overflow-hidden bg-[url('images/Background2.svg')] bg-cover">
      <Header />
      <motion.div
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        exit={{ x: '-100vw' }}
        transition={{ type: 'spring', stiffness: 40 }}
      >
        <TipoVivienda />
      </motion.div>
    </main>
  );
}
