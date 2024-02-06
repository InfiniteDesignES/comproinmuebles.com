/* eslint-disable react/prop-types */
export default function ContenedorPregunta({ children }) {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h3 className="font-extrabold text-5xl leading-10 text-0">Preguntas Frecuentes</h3>
      <p className="mt-6 font-medium text-2xl text-01">¿Tienes alguna duda? ¡Nosotros la resolvemos!</p>
      <div className="flex gap-8">{children}</div>
    </div>
  );
}
