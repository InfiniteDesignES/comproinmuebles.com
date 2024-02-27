/* eslint-disable react/prop-types */
import * as Slider from '@radix-ui/react-slider';
import "../../../styles/Slider.css"
import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';

import { Context } from '../../../pages/Vender.jsx';

export default function MetrosCuadrados({ toggleComponent }) {
    const { formulario, setFormulario } = useContext(Context);
    const [sliderValue, setSliderValue] = useState(75);

    const handleSliderChange = (value) => {
        setSliderValue(value[0]);
    };

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
        setFormulario({ ...formulario, "metrosCuadrados": sliderValue });
        toggleComponent(data);
    };

    return (
        <div className="relacionExterior max-w-[620px] w-full min-h-[320px] h-full bg-[var(--fondo-informacion-vivienda)] rounded-md flex items-center justify-center gap-10 flex-col bg-900">
            <h3 className="text-2xl font-semibold">Superficie de la vivienda (m2)</h3>
            <span> {sliderValue == 150 ? "+" : ""} {sliderValue}m2</span>
            <form onSubmit={handleSubmit(onFormSubmit)} className='w-full flex flex-col gap-4 items-center justify-center'>
                <div className='w-full flex items-center justify-center relative'>
                    <span className='absolute left-0 bottom-[-25px] mx-4 md:mx-12'>0m2</span>
                    <span className='absolute right-0 bottom-[-25px] mx-4 md:mx-12'>+150m2</span>
                    <Slider.Root className="SliderRoot w-full" defaultValue={[75]} max={150} step={1} onValueChange={handleSliderChange}>
                        <Slider.Track className="SliderTrack w-full">
                            <Slider.Range className="SliderRange bg-600" />
                        </Slider.Track>
                        <Slider.Thumb className="SliderThumb hover:bg-50" aria-label="Volume" />
                    </Slider.Root>
                </div>
                <div>
                    <button type="submit" className="mt-8 h-9 w-40 rounded-md bg-gradient-to-r from-400 via-600 to-800 bg-size-200 bg-pos-0 text-[var(--blanco)] transition-all duration-150 hover:bg-pos-50 active:bg-pos-100">Continuar</button>
                </div>
            </form>
        </div>
    );
}