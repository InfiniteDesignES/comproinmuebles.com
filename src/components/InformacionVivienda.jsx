import { useForm } from "react-hook-form";

export default function InformacionVivienda() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    return (
        <form onSubmit={handleSubmit(onsubmit)} className="max-w-[800px] min-h-[550px] border border-[var(--color-borde)] rounded-lg flex flex-col px-8 py-4">
            <span className="text-2xl font-bold">Información de la vivienda</span>
            <label htmlFor="direccion" className="text-[11px] mt-2">
                <span className="text-[var(--color-texto-secundario)]">Direccion completa <span className="text-[var(--color-rojo)]">*</span></span>
                <br />
                <input type="text" {...register("direccion", { required: true })} id="direccion" className="w-full h-10 pl-4" />
            </label>
            <div className="w-full flex flex-col md:grid md:grid-cols-6 gap-2">
                <label htmlFor="codigo_postal" className="text-[11px] mt-2">
                    <span className="text-[var(--color-texto-secundario)]">Código postal <span className="text-[var(--color-rojo)]">*</span></span>
                    <br />
                    <input type="number" {...register("codigo_postal", { required: true })} id="codigo_postal" className="w-full h-10 pl-4" min={0} />
                </label>
                <label htmlFor="numero_portal" className="text-[11px] mt-2">
                    <span className="text-[var(--color-texto-secundario)]">Número de portal<span className="text-[var(--color-rojo)]">*</span></span>
                    <br />
                    <input type="number" {...register("numero_portal", { required: true })} id="numero_portal" className="w-full h-10 pl-4" min={0} />
                </label>
                <label htmlFor="bloque" className="text-[11px] mt-2">
                    <span className="text-[var(--color-texto-secundario)]">Bloque</span>
                    <br />
                    <input type="text" {...register("bloque")} id="bloque" className="w-full h-10 pl-4" min={0} />
                </label>
                <label htmlFor="escalera" className="text-[11px] mt-2">
                    <span className="text-[var(--color-texto-secundario)]">Escalera</span>
                    <br />
                    <input type="number" {...register("escalera")} id="escalera" className="w-full h-10 pl-4" min={0} />
                </label>
                <label htmlFor="piso" className="text-[11px] mt-2">
                    <span className="text-[var(--color-texto-secundario)]">Piso </span>
                    <br />
                    <input type="number" {...register("piso")} id="piso" className="w-full h-10 pl-4" min={0} />
                </label>
                <label htmlFor="puerta" className="text-[11px] mt-2">
                    <span className="text-[var(--color-texto-secundario)]">Puerta <span className="text-[var(--color-rojo)]">*</span></span>
                    <br />
                    <input type="number" {...register("puerta", { required: true })} id="puerta" className="w-full h-10 pl-4" min={0} />
                </label>
            </div>
            {(errors.direccion || errors.codigo_postal || errors.numero_portal) && (<span className="text-[var(--color-rojo)] text-sm mt-4">Por favor completa todos los campos</span>)}
            <div className="w-full h-[1px] bg-[var(--color-borde)] my-10">
            </div>
            <div className="w-full min-h-[200px] rounded-md border border-[var(--color-borde)]">
            </div>
            <button type="submit" className="w-full h-9 rounded-md mt-4 text-[var(--blanco)] bg-gradient-to-r from-400 via-600 to-800 bg-pos-0 hover:bg-pos-50 active:bg-pos-100 bg-size-200 transition-all duration-150">Continuar</button>
        </form>

    )
}