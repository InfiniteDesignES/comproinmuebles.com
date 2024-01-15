import Layout from '../layout/Layout.jsx';
import Titulo from '../components/index/Titulo.jsx';
import ComoFunciona from '../components/index/ComoFunciona.jsx';

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
        <ComoFunciona />
      </section>
    </Layout>
  );
}
