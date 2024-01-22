import Layout from '../layout/Layout.jsx';

import Titulo from '../components/index/Titulo.jsx';
import ComoFunciona from '../components/index/ComoFunciona.jsx';
import PorqueEscogernos from '../components/index/PorqueEscogernos.jsx';
import Opiniones from '../components/index/Opiniones.jsx';

import InfoPregunta from '../components/index/PreguntasFrecuentes/InfoPregunta.jsx';
import ContenedorPregunta from '../components/index/PreguntasFrecuentes/ContenedorPregunta.jsx';

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
        <main className="h-screen flex justify-center items-center gap-2">
          <Opiniones
            nombre={'Juan Zas'}
            titulo={'Buena experiencia'}
            opinion={'Textoreview Textoreview Textoreview Textoreview Textoreview Textoreview'}
            estrellas={3}
            secundario={true}
          />
          <Opiniones
            nombre={'Juan Zas'}
            titulo={'Buena experiencia'}
            opinion={'Textoreview Textoreview Textoreview Textoreview Textoreview Textoreview'}
            estrellas={3}
            secundario={false}
          />
          <Opiniones
            nombre={'Juan Zas'}
            titulo={'Buena experiencia'}
            opinion={'Textoreview Textoreview Textoreview Textoreview Textoreview Textoreview'}
            estrellas={3}
            secundario={true}
          />
        </main>
      </section>
      <section className="border-t mx-12 rounded-none border-02">
        <ContenedorPregunta>
          <InfoPregunta pregunta="¿Cuál es tu pregunta?" respuesta="Esta es la respuesta." />
          <InfoPregunta pregunta="¿Cuál es tu pregunta?" respuesta="Esta es la respuesta." />
          <InfoPregunta pregunta="¿Cuál es tu pregunta?" respuesta="Esta es la respuesta." />
        </ContenedorPregunta>
      </section>
    </Layout>
  );
}
