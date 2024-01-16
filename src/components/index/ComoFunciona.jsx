import VenderAhora from '../botones/VenderAhora';

export default function ComoFunciona() {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <h3 className="font-extrabold text-5xl leading-10 text-0">¿Cómo funciona ComproInmuebles?</h3>
      <p className="mt-6 font-medium text-2xl text-01">
        Recibe tu presupuesto inicial gratis y sin compromiso en menos de una semana.
      </p>
      <article className="flex justify-center items-center gap-20 py-12">
        <div className="w-[350px] ">
          <div className="flex items-center">
            <div className="flex items-center relative">
              <div className="flex items-center justify-center rounded-full h-12 w-12 py-3 border-2 bg-blue-600 border-600 text-600">
                1
              </div>
            </div>
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-blue-600"></div>
          </div>
          <img src="public/images/index/Forms.svg" alt="Formulario" />
          <p className="font-medium text-lg text-0 text-center">
            Rellena nuestro formulario rápidamente desde cualquier sitio
          </p>
        </div>
        <div className="w-[350px] ">
          <img src="public/images/index/Office.svg" alt="Formulario" />
          <p className="font-medium text-lg text-0 text-center">
            Analizaremos el inmueble y recibirás una oferta por la vivienda
          </p>
        </div>
        <div className="w-[350px] ">
          <img src="public/images/index/Business.svg" alt="Formulario" />
          <p className="font-medium text-lg text-0 text-center">
            Recibe el dinero por tu vivienda en menos de 1 semana
          </p>
        </div>
      </article>
      <VenderAhora />
    </main>
  );
}
