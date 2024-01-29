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
        <div className="fixed flex flex-col items-center text-center ">
            <div className="flex items-center gap-6 mb-10 text-center text-900">
                <a onClick={() => onCLickHandler(1)} className="cursor-pointer hover:text-600">Política de Privacidad</a>
                <a onClick={() =>onCLickHandler(2)} className="cursor-pointer hover:text-600">Terminos y condicione</a>
                <a onClick={() =>onCLickHandler(3)} className="cursor-pointer hover:text-600">Política de cookies</a>
            </div>
            <InfoTexts n={currentPage}/>
        </div>

    )
}
