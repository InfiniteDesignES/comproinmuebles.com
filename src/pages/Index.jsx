import Layout from '../layout/Layout.jsx';

import Titulo from '../components/index/Titulo.jsx';
import ComoFunciona from '../components/index/ComoFunciona.jsx';
import PorqueEscogernos from '../components/index/PorqueEscogernos.jsx';
// import Opiniones from '../components/index/Opiniones.jsx';

import InfoPregunta from '../components/index/PreguntasFrecuentes/InfoPregunta.jsx';
import ContenedorPregunta from '../components/index/PreguntasFrecuentes/ContenedorPregunta.jsx';

export default function Index() {
  return (
    <Layout>
      <section className='h-screen bg-[url("images/Background.svg")] bg-cover'>
        <Titulo />
      </section>
      <section >
        <ComoFunciona />
      </section>
      <section className="border-t mx-12 rounded-none border-02">
        <PorqueEscogernos />
      </section>
      <section className="border-t mx-12 rounded-none border-02">
        <ContenedorPregunta>
          <InfoPregunta pregunta="¿Cuál es el proceso de venta de su inmueble a nuestra empresa?" respuesta="Nuestro proceso de compra es rápido y sencillo. Todo comienza cuando nos contactas para evaluar tu propiedad. Luego, programamos una visita para inspeccionar el inmueble y hacer una oferta. Si aceptas nuestra oferta, nos encargamos de toda la tramitación legal y te garantizamos una venta en tan solo 7 días." />
          <InfoPregunta pregunta="¿Qué tipo de propiedades estamos interesados en comprar?" respuesta="Estamos interesados en todo tipo de propiedades, desde casas y apartamentos hasta terrenos y locales comerciales. No importa el estado de la propiedad o si tiene problemas legales o deudas pendientes. Nuestra empresa está aquí para ayudarte a resolver tus necesidades de venta de manera rápida y efectiva." />
          <InfoPregunta pregunta="¿Cómo puedo estar seguro de que recibiré una oferta justa por mi propiedad y en qué criterios se basa nuestra empresa para determinar el precio de compra?" respuesta="Nuestro equipo de expertos en bienes raíces realiza una evaluación completa de cada propiedad utilizando una variedad de criterios, como el tamaño, la ubicación, el estado de la propiedad y el valor de mercado actual. Nos esforzamos por ofrecer ofertas justas y competitivas que reflejen el valor real de su propiedad en el mercado actual. Además, estamos siempre dispuestos a discutir y negociar para llegar a un acuerdo mutuamente beneficioso." />
        </ContenedorPregunta>
      </section>
    </Layout>
  );
}
