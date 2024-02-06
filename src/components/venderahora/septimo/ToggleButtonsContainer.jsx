import { useState } from 'react';
import ToggleButton from './ToggleButton';

export default function ToggleButtonsContainer() {
    // Estado para rastrear el botón activo
    const [activeButton, setActiveButton] = useState(null);

    // Mensajes para tus botones
    const buttons = [
        "Voy a comprar otra",
        "Necesidad urgente",
        "Cambio de residencia",
        "Herencia/divorcio"
    ];

    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-1 mt-4 text-[var(--color-secundario)]'>
            {buttons.map((message, index) => (
                <ToggleButton
                    key={index}
                    message={message}
                    isActive={activeButton === index}
                    onClick={() => setActiveButton(index)}
                />
            ))}
        </div>
    );
}
