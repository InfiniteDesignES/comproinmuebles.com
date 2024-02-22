import { useForm } from 'react-hook-form';

export default function EspaciosComunes({toggleComponent}) {
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
        console.log(data);
        toggleComponent(data);
    };

    return (
        <div className="relacionExterior max-w-[1120px] w-full min-h-[320px] h-full bg-[var(--fondo-informacion-vivienda)] rounded-md flex items-center justify-around flex-col">
            <h3 className="text-2xl font-semibold">Relación con el exterior</h3>
            <div className="grid grid-cols-1 md:grid-cols-6 w-full h-full">
                <div className="flex flex-col w-full items-center justify-center">
                    <img src="icons/terraza.svg" alt="Exterior" className="max-w-[168px] h-[168px] md:h-full object-contain cursor-pointer" />
                    <p className="text-3xl font-medium text-[var(--azul-secundario)]">Terraza</p>
                </div>
                <div className="flex flex-col w-full items-center justify-center ">
                    <img src="icons/balcon.svg" alt="Interior" className="max-w-[168px] h-[168px] md:h-full w-full object-contain cursor-pointer" />
                    <p className="text-3xl font-medium text-[var(--azul-secundario)]">Balcón</p>
                </div>
                <div className="flex flex-col w-full items-center justify-center ">
                    <img src="icons/jardin.svg" alt="Interior" className="max-w-[168px] h-[168px] md:h-full w-full object-contain cursor-pointer" />
                    <p className="text-3xl font-medium text-[var(--azul-secundario)]">Jardín</p>
                </div>
                <div className="flex flex-col w-full items-center justify-center ">
                    <img src="icons/trastero.svg" alt="Interior" className="max-w-[168px] h-[168px] md:h-full w-full object-contain cursor-pointer p-4" />
                    <p className="text-3xl font-medium text-[var(--azul-secundario)]">Trastero</p>
                </div>
                <div className="flex flex-col w-full items-center justify-center ">
                    <img src="icons/portero.svg" alt="Interior" className="max-w-[168px] h-[168px] md:h-full w-full object-contain cursor-pointer" />
                    <p className="text-3xl font-medium text-[var(--azul-secundario)]">Portero</p>
                </div>
                <div className="flex flex-col w-full items-center justify-center ">
                    <img src="icons/piscina.svg" alt="Interior" className="max-w-[168px] h-[168px] md:h-full w-full object-contain cursor-pointer" />
                    <p className="text-3xl font-medium text-[var(--azul-secundario)]">Piscina</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onFormSubmit)} className='w-full flex flex-col gap-4 items-center justify-center'>
                <button type="submit" className="mt-8 h-9 w-40 rounded-md bg-gradient-to-r from-400 via-600 to-800 bg-size-200 bg-pos-0 text-[var(--blanco)] transition-all duration-150 hover:bg-pos-50 active:bg-pos-100">Continuar</button>
            </form>
        </div>
    )
}