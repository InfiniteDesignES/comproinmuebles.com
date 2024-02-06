import { useState } from 'react';
import Header from '../layout/Header';
import InformacionVivienda from '../components/venderahora/primero/InformacionVivienda';
import TipoVivienda from '../components/venderahora/segundo/TipoVivienda';

export default function Vender() {
  // 0 para InformacionVivienda, 1 para TipoVivienda
  const [mostrarFormulario, setMostrarFormulario] = useState(0);

  const handleCambiarFormulario = () => {
    setMostrarFormulario(1);
  };

  const renderComponent = () => {
    switch (mostrarFormulario) {
      case 0:
        return <InformacionVivienda setSiguiente={handleCambiarFormulario} />;
      case 1:
        return <TipoVivienda />;
      default:
        return null;
    }
  };

  return (
    <main className="flex justify-center items-center h-screen bg-[url('images/Background2.svg')] bg-cover">
      <Header />
      {renderComponent()}
    </main>
  );
}
