export default function TipoVivienda() {
    return (
        <div className="tipoVivienda max-w-[620px] w-full min-h-[320px] h-full bg-[var(--fondo-informacion-vivienda)] rounded-md flex items-center justify-around flex-col">
            <h3 className="text-2xl font-semibold">Tipo vivienda</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
                <div className="flex flex-col w-full items-center justify-center">
                    <img src="icons/casa.svg" alt="Icono chalet" className="max-w-[168px] h-[168px] md:h-full object-contain cursor-pointer" />
                    <p className="text-3xl font-medium text-[var(--azul-secundario)]">Casa</p>
                </div>
                <div className="flex flex-col w-full items-center justify-center ">
                    <img src="icons/piso.svg" alt="Icono chalet" className="max-w-[168px] h-[168px] md:h-full w-full object-contain cursor-pointer" />
                    <p className="text-3xl font-medium text-[var(--azul-secundario)]">Piso</p>
                </div>
            </div>
        </div>
    )
}