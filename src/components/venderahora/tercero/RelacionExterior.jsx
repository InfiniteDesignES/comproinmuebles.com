/* eslint-disable react/prop-types */
import { useState, useContext } from 'react';

import { Context } from '../../../pages/Vender.jsx';

export default function RelacionExterior({ toggleComponent, togglePrevious }) {
  const { formulario, setFormulario } = useContext(Context);
  const [hovers, setHovers] = useState([false, false]);
  const [selected, setSelected] = useState(null);

  const handleMouseEnter = (index) => {
    setHovers(hovers.map((hover, i) => (i === index ? true : hover)));
  };

  const handleMouseLeave = (index) => {
    setHovers(hovers.map((hover, i) => (i === index ? false : hover)));
  };

  const handleClick = (index) => {
    setSelected(index);
  };

  return (
    <div className="max-w-[500px] w-full md:max-h-[400px] max-h-[500px] h-full bg-[var(--fondo-informacion-vivienda)] rounded-md flex items-center justify-around flex-col py-8 relative">
      <button type="button" className="absolute top-0 left-0 px-4" onClick={togglePrevious}>
        <img className='transform rotate-90' src="icons/arrowopen.svg" alt="Volver" />
      </button>
      <h3 className="text-2xl text-0 mb-4">Relación con el exterior</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
        <div className="flex flex-col w-full items-center justify-center">
          <div
            className={`divImagenFormulario ${selected !== 0 ? 'colorGrisFormulario' : ''}`}
            onClick={() => { handleClick(0); toggleComponent(); setFormulario({ ...formulario, relacion_exterior: 'exterior' }) }}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={() => handleMouseLeave(0)}
          >
            <img
              src="icons/exterior.svg"
              alt="Exterior"
              className="max-w-[168px] h-[168px] object-contain cursor-pointer hoverImagenFormulario"
            />
          </div>

          <div
            className={`w-6/12 h-[3px] bg-[var(--color-borde)] my-4 rounded-md hoverDivisorFormulario ${hovers[0] ? 'divDisivorFormulario' : ''
              }`}
          ></div><p className={` font-medium ${hovers[0] ? 'divDisivorFormularioTexto' : ''
            }`}>Exterior</p>
          {/* <p className="text-3xl font-medium text-[var(--azul-secundario)]">Piso</p> */}
        </div>
        <div className="flex flex-col w-full items-center justify-center">
          <div
            className={`divImagenFormulario ${selected !== 1 ? 'colorGrisFormulario' : ''}`}
            onClick={() => { handleClick(1); toggleComponent(); setFormulario({ ...formulario, relacion_exterior: 'interior' }) }}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
          >
            <img
              src="icons/interior.svg"
              alt="Interior"
              className="max-w-[168px] h-[168px] object-contain cursor-pointer hoverImagenFormulario"
            />
          </div>

          <div
            className={`w-6/12 h-[3px] bg-[var(--color-borde)] my-4 rounded-md hoverDivisorFormulario ${hovers[1] ? 'divDisivorFormulario' : ''
              }`}
          ></div>
          <p className={` font-medium ${hovers[1] ? 'divDisivorFormularioTexto' : ''
            }`}>Interior</p>
          {/* <p className="text-3xl font-medium text-[var(--azul-secundario)]">Piso</p> */}
        </div>
      </div>
    </div>
  );
}