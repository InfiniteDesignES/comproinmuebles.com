

export default function RelacionExterior() {
    return (
        <div className="relacionExterior max-w-[620px] w-full min-h-[320px] h-full bg-[var(--fondo-informacion-vivienda)] rounded-md flex items-center justify-around flex-col">
            <h3 className="text-2xl font-semibold">Relación con el exterior</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
                <div className="flex flex-col w-full items-center justify-center">
                    <img src="icons/exterior.svg" alt="Exterior" className="max-w-[168px] h-[168px] md:h-full object-contain cursor-pointer" />
                    <p className="text-3xl font-medium text-[var(--azul-secundario)]">Exterior</p>
                </div>
                <div className="flex flex-col w-full items-center justify-center ">
                    <img src="icons/interior.svg" alt="Interior" className="max-w-[168px] h-[168px] md:h-full w-full object-contain cursor-pointer" />
                    <p className="text-3xl font-medium text-[var(--azul-secundario)]">Interior</p>
                </div>
            </div>
        </div>
    )
}