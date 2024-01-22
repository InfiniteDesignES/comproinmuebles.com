import Layout from '../layout/Layout.jsx';

import Titulo from '../components/index/Titulo.jsx';
import ComoFunciona from '../components/index/ComoFunciona.jsx';
import PorqueEscogernos from "../components/index/PorqueEscogernos.jsx";
import Opiniones from '../components/index/Opiniones.jsx';

export default function Index() {
  return (
    <Layout>
      <section className='h-screen bg-[url("images/Background.svg")] bg-cover'>
        <Titulo />
      </section>
      <section>
        <ComoFunciona />
      </section>
      <section className="border-t mx-12 rounded-none border-02">
        <PorqueEscogernos />
      </section>
      <section className="border-t mx-12 rounded-none border-02">
        <Opiniones username={"Zas"} title={"Hey"} review={"yo"} rating={3} />
      </section>
    </Layout>
  );
}
