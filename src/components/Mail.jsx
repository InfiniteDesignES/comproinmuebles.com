import { useForm } from "react-hook-form"

export  default function  Mail  () {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    return(
        <form className="w-full">
            <h1 className="text-2xl font-bold de">Correo:</h1>
            <p className="mb-10 text-xs text-[var(--color-texto-secundario)]">Para contactar con nosotros, hágalo a través de nuestro correo rellene el siguiente formulario</p>
            <form onSubmit={handleSubmit(onsubmit)} className="max-w-[1000px] min-h-[550px] border border-[var(--color-borde)] rounded-lg flex flex-col px-8 py-4 gap-9 ml-10" /*action="https://formsubmit.co/comproinmueble@ " method="POST"*/>
                <span className="text-2xl font-bold">Enviar contacto:</span>
                <div className="flex flex-col w-full gap-2 md:grid md:grid-cols-3">
                    <label htmlFor="name">
                        <span className="text-[var(--color-texto-secundario)]">Nombre<span className="text-[var(--color-rojo)]">*</span></span>
                        <br />
                        <input type="text" {...register("nombre", { required: true })} id="nombre" name="name" className="border-2 border-solid rounded border-[var(--color-texto-secundario)]"/>
                    </label>
                    <label htmlFor="apellido">
                        <span className="text-[var(--color-texto-secundario)]">Apellido<span className="text-[var(--color-rojo)]">*</span></span>
                        <br />
                        <input type="text" {...register("apellido", { required: true })} id="apellido" name="apellido" className="border-2 border-solid rounded border-[var(--color-texto-secundario)]"/>
                    </label>
                    <label htmlFor="telefono">
                        <span className="text-[var(--color-texto-secundario)]">Telefono<span className="text-[var(--color-rojo)]">*</span></span>
                        <br />
                        <input type="number" {...register("telefono", { required: true })} id="telefono" name="telefono" className="border-2 border-solid rounded border-[var(--color-texto-secundario)]"/>
                    </label>
                </div>
                {(errors.nombre || errors.apellido || errors.telefono) && (<span className="text-[var(--color-rojo)] text-sm mt-4">Por favor completa todos los campos</span>)}
                <label htmlFor="email">
                    <span className="text-[var(--color-texto-secundario)]">Correo <span className="text-[var(--color-rojo)]">*</span></span>
                    <br />
                    <input type="email" {...register("email", { required: true })} id="mail" name="email" className="w-full h-10 pl-4 border-2 border-solid rounded border-[var(--color-texto-secundario)]" />    
                </label>
                <div>
                    <label htmlFor="message">
                        <span className="text-[var(--color-texto-secundario)]">Mensaje <span className="text-[var(--color-rojo)]">*</span></span>
                        <br />
                        <textarea name="message" id="mesagge" cols="30" rows="10"{...register("message", { required: true })} className="w-full pl-4 border-2 border-solid rounded border-[var(--color-texto-secundario)]" ></textarea> 
                    </label>
                </div>
                <button type="submit" className="w-full h-9 rounded-md mt-4 text-[var(--blanco)] bg-gradient-to-r from-400 via-600 to-800 bg-pos-0 hover:bg-pos-50 active:bg-pos-100 bg-size-200 transition-all duration-150">Enviar</button>
            </form>
        </form>
    )
}