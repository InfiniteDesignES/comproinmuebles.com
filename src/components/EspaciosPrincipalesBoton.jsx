import { useState } from "react";



export default function EspaciosPrincipalesBoton() {
    const [cantidad, setCantidad] = useState(0);

    return (
        <div className="gradiente w-full flex justify-center relative mt-10">
            <button onClick={() => { setCantidad(cantidad > 0 ? cantidad - 1 : cantidad) }} className="absolute top-0 left-0  rounded-full scale-150  bg-[#F7F9FC] border-[var(--color-borde)] border text-center"><img src="icons/menos.png" alt="" className="w-[20px] h-[20px] px-[3px] " /></button>
            <span>{cantidad}</span>
            <button onClick={() => { setCantidad(cantidad + 1) }} className="absolute top-0 right-0  rounded-full scale-150 bg-[#F7F9FC] border-[var(--color-borde)] border text-center "><img src="icons/plus-pequeno.png" alt="" className="w-[20px] h-[20px] " /></button>
        </div>
    )
}
