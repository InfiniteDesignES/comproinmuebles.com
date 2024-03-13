/* eslint-disable react/prop-types */
import { useState, useContext } from 'react';

import { Context } from '../../../pages/Vender.jsx';

export default function TipoVivienda({ toggleComponent }) {
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

    <div className="max-w-[500px] w-full md:max-h-[400px] max-h-[500px] h-full bg-[var(--fondo-informacion-vivienda)] rounded-md flex items-center justify-around flex-col py-8">
      <h3 className="text-2xl text-0 mb-4">Tipo de vivienda</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
        <div className="flex flex-col w-full items-center justify-center">

          <div
            className={`divImagenFormulario ${selected !== 0 ? 'colorGrisFormulario' : ''}`}
            onClick={() => { handleClick(0); toggleComponent(); setFormulario({ ...formulario, tipo_vivienda: 'chalet' }) }}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={() => handleMouseLeave(0)}
          >
            <img
              src="icons/casa.svg"
              alt="Icono chalet"
              className="max-w-[168px] h-[168px] object-contain cursor-pointer hoverImagenFormulario"
            />
          </div>

          <div
            className={`w-6/12 h-[3px] bg-[var(--color-borde)] my-4 rounded-md hoverDivisorFormulario ${hovers[0] ? 'divDisivorFormulario' : ''
              }`}
          ></div>
          <p className={` font-medium ${hovers[0] ? 'divDisivorFormularioTexto' : ''
            }`}>Chalet</p>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <div
            className={`divImagenFormulario ${selected !== 1 ? 'colorGrisFormulario' : ''}`}
            onClick={() => { handleClick(1); toggleComponent(); setFormulario({ ...formulario, tipo_vivienda: 'piso' }) }}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
          >
            <img
              src="icons/piso.svg"
              alt="Icono piso"
              className="max-w-[168px] h-[168px] object-contain cursor-pointer hoverImagenFormulario"
            />
          </div>

          <div
            className={`w-6/12 h-[3px] bg-[var(--color-borde)] my-4 rounded-md hoverDivisorFormulario ${hovers[1] ? 'divDisivorFormulario' : ''
              }`}
          ></div>
          <p className={` font-medium ${hovers[1] ? 'divDisivorFormularioTexto' : ''
            }`}>Piso</p>
        </div>
      </div>
    </div>
  );
}