import { useForm } from 'react-hook-form';

export default function EstadoVivienda({toggleComponent}) {
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
        <div className="relacionExterior max-w-[770px] w-full min-h-[320px] h-full bg-[var(--fondo-informacion-vivienda)] rounded-md flex items-center justify-around flex-col">
            <h3 className="text-2xl font-semibold">Relación con el exterior</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 w-full h-full">
                <div className="flex flex-col w-full items-center justify-center">
                    <img src="icons/buen_estado.svg" alt="Buen estado" className="max-w-[168px] h-[168px] md:h-full object-contain cursor-pointer" />
                    <p className="text-3xl font-medium text-[var(--azul-secundario)]">Buen estado</p>
                </div>
                <div className="flex flex-col w-full items-center justify-center ">
                    <img src="icons/reformado.svg" alt="Reformado" className="max-w-[168px] h-[168px] md:h-full w-full object-contain cursor-pointer" />
                    <p className="text-3xl font-medium text-[var(--azul-secundario)]">Reformado</p>
                </div>
                <div className="flex flex-col w-full items-center justify-center ">
                    <img src="icons/necesita_reforma.svg" alt="Necesita reforma" className="max-w-[168px] h-[168px] md:h-full w-full object-contain cursor-pointer" />
                    <p className="text-3xl font-medium text-[var(--azul-secundario)]">Necesita reforma</p>
                </div>
            </div>
            <form onSubmit={handleSubmit(onFormSubmit)} className='w-full flex flex-col gap-4 items-center justify-center'>
                <button type="submit" className="mt-8 h-9 w-40 rounded-md bg-gradient-to-r from-400 via-600 to-800 bg-size-200 bg-pos-0 text-[var(--blanco)] transition-all duration-150 hover:bg-pos-50 active:bg-pos-100">Continuar</button>
            </form>
        </div>
    )
}