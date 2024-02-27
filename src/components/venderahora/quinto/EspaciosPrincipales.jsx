/* eslint-disable react/prop-types */
import { set, useForm } from 'react-hook-form';
import { useState, useContext } from 'react';

import EspaciosPrincipalesBoton from "./EspaciosPrincipalesBoton";

import { Context } from '../../../pages/Vender.jsx';

export default function EspaciosPrincipales({ toggleComponent }) {
    const { formulario, setFormulario } = useContext(Context);
    const [cantidadHabitaciones, setCantidadHabitaciones] = useState(0);
    const [cantidadBanos, setCantidadBanos] = useState(0);
    const [cantidadAscensor, setCantidadAscensor] = useState(0);
    const [cantidadGaraje, setCantidadGaraje] = useState(0);


    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            metroscuadrados: 75,
        }
    });

    const onFormSubmit = (data) => {
        setFormulario({ ...formulario, "espaciosPrincipales": { "habitaciones": cantidadHabitaciones, "baños": cantidadBanos, "ascensores": cantidadAscensor, "garaje": cantidadGaraje } });
        toggleComponent(data);
    };

    return (
        <div className="relacionExterior max-w-[1050px] w-full min-h-[320px] h-full bg-[var(--fondo-informacion-vivienda)] rounded-md flex items-center justify-around flex-col">
            <h3 className="text-2xl font-semibold">Espacios principales</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 w-full h-full">
                <div className="flex flex-col w-full items-center justify-center px-8">
                    <div
                        className={`divImagenFormulario ${cantidadHabitaciones == 0 ? 'colorGrisFormulario' : ''}`}
                    >
                        <img src="icons/habitaciones.svg" alt="Exterior" className="max-w-[168px] h-[168px] md:h-full object-contain p-4 cursor-pointer hoverImagenFormulario" />
                    </div>
                    <p className="text-3xl font-medium text-[var(--azul-secundario)]">Habitaciones</p>
                    <EspaciosPrincipalesBoton seleccionado={setCantidadHabitaciones} />
                </div>
                <div className="flex flex-col w-full items-center justify-center px-8">
                    <div
                        className={`divImagenFormulario ${cantidadBanos == 0 ? 'colorGrisFormulario' : ''}`}
                    >
                        <img src="icons/duchas.svg" alt="Interior" className="max-w-[168px] h-[168px] md:h-full w-full object-contain clear-start p-4 cursor-pointer hoverImagenFormulario" />
                    </div>
                    <p className="text-3xl font-medium text-[var(--azul-secundario)]">Baños</p>
                    <EspaciosPrincipalesBoton seleccionado={setCantidadBanos} />
                </div>
                <div className="flex flex-col w-full items-center justify-center px-8">
                    <div
                        className={`divImagenFormulario ${cantidadAscensor == 0 ? 'colorGrisFormulario' : ''}`}
                    >
                        <img src="icons/ascensor.svg" alt="Interior" className="max-w-[168px] h-[168px] md:h-full w-full object-contain clear-start p-4 cursor-pointer hoverImagenFormulario" />
                    </div>
                    <p className="text-3xl font-medium text-[var(--azul-secundario)]">Ascensor</p>
                    <EspaciosPrincipalesBoton seleccionado={setCantidadAscensor} />
                </div>
                <div className="flex flex-col w-full items-center justify-center px-8">
                    <div
                        className={`divImagenFormulario ${cantidadGaraje == 0 ? 'colorGrisFormulario' : ''}`}
                    >
                        <img src="icons/garaje.svg" alt="Interior" className="max-w-[168px] h-[168px] md:h-full w-full object-contain clear-start p-4 cursor-pointer hoverImagenFormulario" />
                    </div>
                    <p className="text-3xl font-medium text-[var(--azul-secundario)]">Garaje</p>
                    <EspaciosPrincipalesBoton seleccionado={setCantidadGaraje} />
                </div>
            </div>
            <form onSubmit={handleSubmit(onFormSubmit)} className='w-full flex flex-col gap-4 items-center justify-center'>
                <button type="submit" className="mt-8 h-9 w-40 rounded-md bg-gradient-to-r from-400 via-600 to-800 bg-size-200 bg-pos-0 text-[var(--blanco)] transition-all duration-150 hover:bg-pos-50 active:bg-pos-100">Continuar</button>
            </form>
        </div>
    )
}
