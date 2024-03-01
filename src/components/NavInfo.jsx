import InfoTexts from "./InfoTexts"
import { useState } from "react";

export default function NavInfo(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const onCLickHandler = (n) => {
        setCurrentPage(n)
        if (props.onButtonClick) {
            props.onButtonClick(n);
        }
    };

    return (
        <div className="flex flex-col items-center w-full text-left">
            <div className="flex flex-col md:flex-row gap-6 mb-10 text-negro w-full pl-10">
                <a onClick={() => onCLickHandler(1)} className="cursor-pointer hover:text-600">
                    <button type="submit" className="mt-8 h-9 min-w-40 px-4 rounded-md bg-gradient-to-r from-400 via-600 to-800 bg-size-200 bg-pos-0 text-[var(--blanco)] transition-all duration-150 hover:bg-pos-50 active:bg-pos-100">
                        Política de Privacidad
                    </button>
                </a>
                <a onClick={() => onCLickHandler(2)} className="cursor-pointer hover:text-600">
                    <button type="submit" className="mt-8 h-9 min-w-40 px-4 rounded-md bg-gradient-to-r from-400 via-600 to-800 bg-size-200 bg-pos-0 text-[var(--blanco)] transition-all duration-150 hover:bg-pos-50 active:bg-pos-100">
                        Terminos y condiciones
                    </button>
                </a>
                <a onClick={() => onCLickHandler(3)} className="cursor-pointer hover:text-600">
                    <button type="submit" className="mt-8 h-9 min-w-40 px-4 rounded-md bg-gradient-to-r from-400 via-600 to-800 bg-size-200 bg-pos-0 text-[var(--blanco)] transition-all duration-150 hover:bg-pos-50 active:bg-pos-100">
                        Política de cookies
                    </button>
                </a>
            </div>
            <InfoTexts n={currentPage} />
        </div>

    )
}
