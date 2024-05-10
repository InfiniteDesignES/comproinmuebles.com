/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { useForm } from "react-hook-form";
import ToggleButtonsContainer from "./ToggleButtonsContainer";

import { Context } from '../../../pages/Vender.jsx';

export default function PorqueVender({ toggleComponent, togglePrevious }) {
    const { formulario, setFormulario } = useContext(Context);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            metroscuadrados: 75,
        }
    });

    const onFormSubmit = (data) => {
        setFormulario({ ...formulario, data });
        toggleComponent(data);
    };

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className="max-w-[800px] border border-[var(--color-borde)] rounded-lg flex flex-col p-8 bg-[var(--fondo-informacion-vivienda)] relative">
            <button type='button' className="absolute top-0 left-0 px-4" onClick={togglePrevious}>
                <img className='transform rotate-90' src="icons/arrowopen.svg" alt="Volver" />
            </button>
            <span className="text-2xl">Información de la vivienda</span>
            <ToggleButtonsContainer />
            <label htmlFor="direccion" className="text-[11px] mt-2">
                <span className="text-[var(--color-texto-secundario)]">¿Cuánto esperas recibir por la vivienda? <span className="text-[var(--color-rojo)]">*</span></span>
                <br />
                <input type="number" {...register("precio", { required: true })} placeholder="€" id="precio" className="w-full h-10 pl-4" />
            </label>
            {(errors.precio) && (<span className="text-[var(--color-rojo)] text-sm mt-4">Por favor completa todos los campos</span>)}
            <button type="submit" className="w-full h-9 rounded-md mt-4 text-[var(--blanco)] bg-gradient-to-r from-400 via-600 to-800 bg-pos-0 hover:bg-pos-50 active:bg-pos-100 bg-size-200 transition-all duration-150">Continuar</button>
        </form>

    )
}