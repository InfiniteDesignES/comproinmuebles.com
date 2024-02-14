import { useForm } from "react-hook-form"

export  default function  Mail  () {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const changePrefijo = () => {
    }
    return(
        <form onSubmit={handleSubmit(onsubmit)} className="max-w-[800px] border border-[var(--color-borde)] rounded-lg flex flex-col px-8 py-4">
            <span className="text-2xl font-bold">Enviar contacto</span>
            <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2">
                <label htmlFor="direccion" className="text-[11px] mt-2 ">
                    <span className="text-[var(--color-texto-secundario)]">Nombre <span className="text-[var(--color-rojo)]">*</span></span>
                    <input type="text" {...register("nombre", { required: true })} id="nombre" className="w-full h-10 pl-4" />
                </label>
                <label htmlFor="apellidos" className="text-[11px] mt-2 ">
                    <span className="text-[var(--color-texto-secundario)]">Apellidos <span className="text-[var(--color-rojo)]">*</span></span>
                    <input type="text" {...register("apellidos", { required: true })} id="apellidos" className="w-full h-10 pl-4" />
                </label>
            </div>
            <label htmlFor="direccion" className="text-[11px] mt-2 ">
                <span className="text-[var(--color-texto-secundario)]">Correo electrónico <span className="text-[var(--color-rojo)]">*</span></span>
                <input type="email" {...register("email", { required: true })} id="email" className="w-full h-10 pl-4" />
            </label>
            <div className="w-full text-[11px] mt-2">
                <span className="text-[var(--color-texto-secundario)]">Telefono <span className="text-[var(--color-rojo)]">*</span></span>
                <div className="flex w-full gap-2">
                    <input onChange={(e) => { changePrefijo(e) }} maxLength={4} type="text" {...register("prefijo", { required: true })} id="prefijo" className="w-[20%] h-10 pl-4" />
                    <input type="number" {...register("telefono", { required: true })} id="telefono" className="w-[80%] h-10 pl-4" />
                </div>

            </div>
            {(errors.nombre || errors.apellidos || errors.prefijo || errors.telefono || errors.email) && (<span className="text-[var(--color-rojo)] text-sm mt-4">Por favor completa todos los campos</span>)}
            <button type="submit" className="w-full h-9 rounded-md mt-4 text-[var(--blanco)] bg-gradient-to-r from-400 via-600 to-800 bg-pos-0 hover:bg-pos-50 active:bg-pos-100 bg-size-200 transition-all duration-150">Continuar</button>
        </form>
    )
}