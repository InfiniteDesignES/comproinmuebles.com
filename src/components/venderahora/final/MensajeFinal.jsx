export default function MensajeFinal() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <img src="icons/confirmacion.svg" alt="Confirmacion" className="max-w-[168px] h-[168px] w-full object-contain" />
            <h2 className="text-2xl font-semibold text-[var(--azul-secundario)] mt-4">¡Gracias por confiar en nosotros!</h2>
            <p className="text-lg text-center mt-4">Hemos recibido tu información y nos pondremos en contacto contigo lo antes posible.</p>
        </div>
    )
}