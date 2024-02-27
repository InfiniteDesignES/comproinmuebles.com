import { Link } from "react-router-dom";

export default function Tarjeta404 ()  {

    return(
        <main className="flex flex-col items-center w-full h-screen">
            <div className="pt-[15rem] flex flex-col justify-center items-center text-03"></div>
                <div className="max-w-[400px] max-h-[400px] ml-2 mr-2 w-screen md:max-h-[400px] min-w-[600px]  h-full bg-[var(--fondo-informacion-vivienda)] rounded-md flex items-center justify-around flex-col py-8">
                    <h3 className="mb-4 text-3xl font-medium text-0">Error</h3>
                    <h3 className="mb-4 font-bold text-8xl text-600">404</h3>
                    <h3 className="mb-4 text-xl text-0">Pagina no encontrada vuelve al <Link to ="/" className="font-semibold text-600">inicio</Link></h3>                    
            </div>
        </main>
    )
}