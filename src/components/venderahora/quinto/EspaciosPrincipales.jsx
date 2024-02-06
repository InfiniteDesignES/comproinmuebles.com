import EspaciosPrincipalesBoton from "./EspaciosPrincipalesBoton";

export default function EspaciosPrincipales() {
    return (
        <div className="relacionExterior max-w-[1050px] w-full min-h-[320px] h-full bg-[var(--fondo-informacion-vivienda)] rounded-md flex items-center justify-around flex-col">
            <h3 className="text-2xl font-semibold">Relación con el exterior</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 w-full h-full">
                <div className="flex flex-col w-full items-center justify-center px-8">
                    <img src="icons/habitaciones.svg" alt="Exterior" className="max-w-[168px] h-[168px] md:h-full object-contain cursor-pointer p-4" />
                    <p className="text-3xl font-medium text-[var(--azul-secundario)]">Habitaciones</p>
                    <EspaciosPrincipalesBoton />
                </div>
                <div className="flex flex-col w-full items-center justify-center px-8">
                    <img src="icons/duchas.svg" alt="Interior" className="max-w-[168px] h-[168px] md:h-full w-full object-contain cursor-pointer clear-start p-4" />
                    <p className="text-3xl font-medium text-[var(--azul-secundario)]">Baños</p>
                    <EspaciosPrincipalesBoton />
                </div>
                <div className="flex flex-col w-full items-center justify-center px-8">
                    <img src="icons/ascensor.svg" alt="Interior" className="max-w-[168px] h-[168px] md:h-full w-full object-contain cursor-pointer clear-start p-4" />
                    <p className="text-3xl font-medium text-[var(--azul-secundario)]">Ascensor</p>
                    <EspaciosPrincipalesBoton />

                </div>
                <div className="flex flex-col w-full items-center justify-center px-8">
                    <img src="icons/garaje.svg" alt="Interior" className="max-w-[168px] h-[168px] md:h-full w-full object-contain cursor-pointer clear-start p-4" />
                    <p className="text-3xl font-medium text-[var(--azul-secundario)]">Garaje</p>
                    <EspaciosPrincipalesBoton />
                </div>
            </div>
        </div>
    )
}
