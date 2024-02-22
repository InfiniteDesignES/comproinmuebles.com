import { useForm } from "react-hook-form"
import FloatingLabelInput from '../components/venderahora/primero/FloatingLabelInput.jsx';


export  default function  Mail2  () {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    return(
        <div className="w-full px-12 mt-20 mb-16 border-t border-t-negro ">
            {/* <h2  className="mt-12 text-2xl font-bold">Contacto:</h2>
            <p className="mb-8 text-xs text-01">Si quieres contactar con nosotros hazlo a través del siguiente formulario </p> */}
                <form
                    action = "mailto:contacto@comproinmuebles.com"
                    className="flex min-h-[550px] max-w-[800px] flex-col gap-4 rounded-lg border border-[var(--color-borde)] bg-[var(--blanco)] px-8 py-4 mt-10"
                    >
                    <h2  className="mt-1 text-2xl font-bold">Contacto:</h2>
                    <p className="mb-8 text-xs text-01">Si quieres contactar con nosotros hazlo a través del siguiente formulario </p>

                    <div className="flex flex-col w-full gap-2 md:grid md:grid-cols-3">
                        <FloatingLabelInput
                        label="Nombre"
                        id="nombre"
                        register={register}
                        required={true}
                        type="text"
                        min={0}
                        
                        />
                        <FloatingLabelInput
                        label="Apellido"
                        id="apellido"
                        register={register}
                        required={true}
                        type="text"
                        min={0}
                        
                        />
                        <FloatingLabelInput label="Telefono" id="telefono" register={register} type="number" min={0} />
                    </div>
                    <div className="w-full">
                        <FloatingLabelInput label="Mail" id="email" register={register} type="email" min={0} />
                        
                    </div>

                    {(errors.direccion || errors.codigo_postal || errors.numero_calle || errors.puerta) && (
                        <span className="mt-4 text-sm text-[var(--color-rojo)]">Por favor completa todos los campos</span>
                    )}

                    <div className="my-4 h-[1px] w-full bg-[var(--color-borde)]"></div>
                    
                    <div>
                        <label htmlFor="mensaje" className="text-[11px] text-[var(--color-texto-secundario)]">Mensaje</label>
                        <textarea className="min-h-[200px] w-full rounded-md border border-[var(--color-borde)]" name="mensaje" ></textarea>

                    </div>
                    
                    <button
                        type="submit"
                        className="mt-4 h-9 w-full rounded-md bg-gradient-to-r from-400 via-600 to-800 bg-size-200 bg-pos-0 text-[var(--blanco)] transition-all duration-150 hover:bg-pos-50 active:bg-pos-100"
                    >
                        Enviar
                    </button>
                </form>
        </div>

    )
}