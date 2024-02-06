export default function EspaciosComunes() {
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
        </div>
    )
}