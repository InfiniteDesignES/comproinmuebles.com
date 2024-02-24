/* eslint-disable react/prop-types */

import { useState } from 'react';

export default function PreguntasFrecuentes({ pregunta, respuesta }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <article className={`my-6 py-6 border-600 border-b-4 rounded-sm transition-all duration-500 ease-in-out overflow-hidden ${isVisible ? 'max-h-96' : 'max-h-20'}`}>
        <div className="text-center w-[350px]" onClick={toggleVisibility}>
          <div className="flex justify-between items-center gap-2">
            <div className="flex gap-4">
              <img src="icons/bubblechat.svg" alt="" />
              <p className="font-bold text-2xl text-0 text-left">{pregunta}</p>
            </div>
            <img
              src="icons/arrowclosed.svg"
              alt=""
              className={`transform transition-transform duration-300 ${isVisible ? 'rotate-90' : 'rotate-0'}`}
            />
          </div>
        </div>

        {/* Contenedor de la respuesta */}
        <div
          className="text-center w-[350px]"
          style={{ overflowY: isVisible ? 'auto' : 'hidden' }}
        >
          <p className="font-medium text-lg text-01 text-left mt-4">{respuesta}</p>
        </div>
      </article>
    </>
  );
}
