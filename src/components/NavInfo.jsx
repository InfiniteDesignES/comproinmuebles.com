import InfoTexts  from "./InfoTexts"
import { useState } from "react";

export default function NavInfo  (props) {
    const [currentPage, setCurrentPage] = useState(1);
    const onCLickHandler = (n) =>{
        setCurrentPage(n)
        if (props.onButtonClick) {
            props.onButtonClick(n);
        }
    };
    
    return(
        <div className="flex flex-col items-center w-full text-left">
            <div className="flex items-center gap-6 mb-10 text-center text-negro">
                <a onClick={() => onCLickHandler(1)} className="cursor-pointer hover:text-600">Política de Privacidad</a>
                <a onClick={() =>onCLickHandler(2)} className="cursor-pointer hover:text-600">Terminos y condiciones</a>
                <a onClick={() =>onCLickHandler(3)} className="cursor-pointer hover:text-600">Política de cookies</a>
            </div>
            <InfoTexts n={currentPage}/>
        </div>

    )
}
