import VenderAhora from '../botones/VenderAhora';
import NumeroDinamico from '../dinamicos/Numero';

export default function PorqueEscogernos() {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <h3 className="font-extrabold text-5xl leading-10 text-0">Por qué escogernos</h3>
      <p className="mt-6 font-medium text-2xl text-01">
        Brindamos un servicio rápido y sin complicaciones para la venta de propiedades, manejando todos los trámites
        legales y papeleos.
      </p>
      <article className="flex justify-center items-center gap-20 py-12">
        <div className="w-[350px] ">
          <NumeroDinamico numero={1} />
          <img src="images/index/Fast.svg" alt="Formulario" />
          <p className="font-medium text-lg text-0 text-center">
            Rellena nuestro formulario rápidamente desde cualquier sitio
          </p>
        </div>
        <div className="w-[350px] ">
          <NumeroDinamico numero={2} />
          <img src="images/index/Lawyer.svg" alt="Formulario" />
          <p className="font-medium text-lg text-0 text-center">
            Analizaremos el inmueble y recibirás una oferta por la vivienda
          </p>
        </div>
        <div className="w-[350px] ">
          <NumeroDinamico numero={3} />
          <img src="images/index/Strategic.svg" alt="Formulario" />
          <p className="font-medium text-lg text-0 text-center">
            Recibe el dinero por tu vivienda en menos de 1 semana
          </p>
        </div>
      </article>
      <VenderAhora />
    </main>
  );
}
