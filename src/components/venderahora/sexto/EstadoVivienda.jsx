
export default function EstadoVivienda() {
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
        </div>
    )
}