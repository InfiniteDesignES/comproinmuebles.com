/* eslint-disable react/prop-types */
export default function ContenedorPregunta({ children }) {
  return (
    <div className="h-screen flex flex-col justify-center items-center my-10">
      <h3 className="font-extrabold md:text-5xl text-4xl text-center leading-10 text-0">Preguntas Frecuentes</h3>
      <p className="mt-6 font-medium md:text-2xl text-xl text-center text-01">¿Tienes alguna duda? ¡Nosotros la resolvemos!</p>
      <div className="flex flex-col md:flex-row gap-8">{children}</div>
    </div>
  );
}
