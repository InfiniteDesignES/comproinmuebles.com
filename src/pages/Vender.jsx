import Header from '../layout/Header';

import InformacionVivienda from '../components/venderahora/InformacionVivienda';

export default function Vender() {
  return (
    <main className="flex justify-center items-center h-screen bg-[url('images/Background.svg')] bg-cover">
        <Header />
      <InformacionVivienda />
    </main>
  );
}
