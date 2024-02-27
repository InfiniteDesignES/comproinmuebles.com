/* eslint-disable react/prop-types */
import { set, useForm } from 'react-hook-form';
import { useState, useContext } from 'react';

import { Context } from '../../../pages/Vender.jsx';

export default function EspaciosComunes({ toggleComponent }) {
    const { formulario, setFormulario } = useContext(Context);
    const [terraza, setTerraza] = useState(0);
    const [balcon, setBalcon] = useState(0);
    const [jardin, setJardin] = useState(0);
    const [trastero, setTrastero] = useState(0);
    const [portero, setPortero] = useState(0);
    const [piscina, setPiscina] = useState(0);

    const {
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            metroscuadrados: 75,
        }
    });

    const onFormSubmit = (data) => {
        setFormulario({ ...formulario, "espaciosComunes": { "terraza": terraza, "balcon": balcon, "jardin": jardin, "trastero": trastero, "portero": portero, "piscina": piscina } });
        toggleComponent(data);
    };

    return (
        <div className="relacionExterior max-w-[1120px] w-full min-h-[320px] h-full bg-[var(--fondo-informacion-vivienda)] rounded-md flex items-center justify-around flex-col">
            <h3 className="text-2xl font-semibold">Espacios comunes</h3>
            <div className="grid grid-cols-1 md:grid-cols-6 w-full h-full">
                <div className="flex flex-col w-full items-center justify-center">
                    <div
                        className={`divImagenFormulario ${terraza == 0 ? 'colorGrisFormulario' : ''}`}
                        onClick={() => { setTerraza(!terraza) }}
                    >
                        <img src="icons/terraza.svg" alt="Exterior" className="max-w-[168px] h-[168px] md:h-full object-contain cursor-pointer hoverImagenFormulario" />
                    </div>

                    <p className="text-3xl font-medium text-[var(--azul-secundario)]">Terraza</p>
                </div>
                <div className="flex flex-col w-full items-center justify-center ">
                    <div
                        className={`divImagenFormulario ${balcon == 0 ? 'colorGrisFormulario' : ''}`}
                        onClick={() => { setBalcon(!balcon) }}
                    >
                        <img src="icons/balcon.svg" alt="Interior" className="max-w-[168px] h-[168px] md:h-full w-full object-contain cursor-pointer hoverImagenFormulario" />
                    </div>
                    <p className="text-3xl font-medium text-[var(--azul-secundario)]">Balcón</p>
                </div>
                <div className="flex flex-col w-full items-center justify-center ">
                    <div
                        className={`divImagenFormulario ${jardin == 0 ? 'colorGrisFormulario' : ''}`}
                        onClick={() => { setJardin(!jardin) }}
                    >
                        <img src="icons/jardin.svg" alt="Interior" className="max-w-[168px] h-[168px] md:h-full w-full object-contain cursor-pointer hoverImagenFormulario" />
                    </div>
                    <p className="text-3xl font-medium text-[var(--azul-secundario)]">Jardín</p>
                </div>
                <div className="flex flex-col w-full items-center justify-center ">
                    <div
                        className={`divImagenFormulario ${trastero == 0 ? 'colorGrisFormulario' : ''}`}
                        onClick={() => { setTrastero(!trastero) }}
                    >
                        <img src="icons/trastero.svg" alt="Interior" className="max-w-[168px] h-[168px] md:h-full w-full object-contain cursor-pointer p-4 hoverImagenFormulario" />
                    </div>
                    <p className="text-3xl font-medium text-[var(--azul-secundario)]">Trastero</p>
                </div>
                <div className="flex flex-col w-full items-center justify-center ">
                    <div
                        className={`divImagenFormulario ${portero == 0 ? 'colorGrisFormulario' : ''}`}
                        onClick={() => { setPortero(!portero) }}
                    >
                        <img src="icons/portero.svg" alt="Interior" className="max-w-[168px] h-[168px] md:h-full w-full object-contain cursor-pointer hoverImagenFormulario" />
                    </div>
                    <p className="text-3xl font-medium text-[var(--azul-secundario)]">Portero</p>
                </div>
                <div className="flex flex-col w-full items-center justify-center ">
                    <div
                        className={`divImagenFormulario ${piscina == 0 ? 'colorGrisFormulario' : ''}`}
                        onClick={() => { setPiscina(!piscina) }}
                    >
                        <img src="icons/piscina.svg" alt="Interior" className="max-w-[168px] h-[168px] md:h-full w-full object-contain cursor-pointer hoverImagenFormulario" />
                    </div>
                    <p className="text-3xl font-medium text-[var(--azul-secundario)]">Piscina</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onFormSubmit)} className='w-full flex flex-col gap-4 items-center justify-center'>
                <button type="submit" className="mt-8 h-9 w-40 rounded-md bg-gradient-to-r from-400 via-600 to-800 bg-size-200 bg-pos-0 text-[var(--blanco)] transition-all duration-150 hover:bg-pos-50 active:bg-pos-100">Continuar</button>
            </form>
        </div>
    )
}