import VenderAhora from '../botones/VenderAhora';
import NumeroDinamico from '../dinamicos/Numero';

export default function ComoFunciona() {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <h3 className="font-extrabold md:text-5xl text-4xl leading-10 text-0 text-center">¿Cómo funciona ComproInmuebles?</h3>
      <p className="mt-6 font-medium text-2xl text-01">
        Recibe tu presupuesto inicial gratis y sin compromiso en menos de una semana.
      </p>
      <article className="flex justify-center items-center gap-20 py-12">
        <div className="w-[350px] ">
          <NumeroDinamico numero={1} />
          <img src="images/index/Forms.svg" alt="Formulario" />
          <p className="font-medium text-lg text-0 text-center">
            Rellena nuestro formulario rápidamente desde cualquier sitio
          </p>
        </div>
        <div className="w-[350px] ">
          <NumeroDinamico numero={2} />
          <img src="images/index/Office.svg" alt="Formulario" />
          <p className="font-medium text-lg text-0 text-center">
            Analizaremos el inmueble y recibirás una oferta por la vivienda
          </p>
        </div>
        <div className="w-[350px] ">
          <NumeroDinamico numero={3} />
          <img src="images/index/Business.svg" alt="Formulario" />
          <p className="font-medium text-lg text-0 text-center">
            Recibe el dinero por tu vivienda en menos de 1 semana
          </p>
        </div>
      </article>
      <VenderAhora />
    </main>
  );
}
