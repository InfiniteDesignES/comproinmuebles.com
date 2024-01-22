/* eslint-disable react/prop-types */
export default function PreguntasFrecuentes({ pregunta, respuesta }) {
  pregunta = 'hola';
  console.log(pregunta, respuesta);

  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <h3 className="font-extrabold text-5xl leading-10 text-0">Preguntas Frecuentes</h3>
      <p className="mt-6 font-medium text-2xl text-01">
        ¿Tienes alguna duda? ¡Nosotros la resolvemos!
      </p>
      <article className="flex justify-center items-center gap-20 py-12">
        <div className="flex items-center justify-center gap-2 text-center w-[350px]">
          <img src="icons/bubblechat.svg" alt="" />
          <p className="font-bold text-2xl text-0 text-center">
            {pregunta}
          </p>
          <img src="icons/arrowclosed.svg" alt="" />
        </div>
      </article>
    </main>
  );
}
