export default function InfoTexts   ({n}) {

    if (n === 0 ||  n === null || n === undefined) {
        n = 1
    }
     if (n === 1) {
        return(
            <div className="flex flex-col items-start w-full mt-10 ">
                <h3 className="mb-10 ml-5 text-600" >Política de Privacidad </h3>
                <p className="w-screen p-16 leading-9 text-negro">
                    Información que Recopilamos:
                    En Compro Inmueble, recopilamos información personal limitada y relevante para proporcionar nuestros servicios. Esto puede incluir nombres, direcciones, información de contacto y detalles de propiedades.

                    Uso de la Información:
                    La información recopilada se utiliza para facilitar la compra y venta de inmuebles, mejorar nuestros servicios, y mantener una comunicación efectiva con nuestros usuarios. No compartimos información con terceros sin el consentimiento del usuario, excepto cuando sea necesario para cumplir con la ley.

                    Seguridad de la Información:
                    Implementamos medidas de seguridad para proteger la información recopilada. Sin embargo, no podemos garantizar la seguridad absoluta, y los usuarios comparten su información bajo su propia responsabilidad.

                    Cookies y Tecnologías Similares:
                    Consulte nuestra Política de Cookies para obtener información detallada sobre el uso de cookies y cómo gestionar las preferencias del usuario.

                    Derechos del Usuario:
                    Los usuarios tienen derecho a acceder, corregir, actualizar o eliminar su información personal. Pueden ejercer estos derechos poniéndose en contacto con nosotros a través de correo@comproinmueble.com.

                    Cambios en la Política de Privacidad:
                    La Política de Privacidad puede ser modificada para cumplir con cambios legislativos o mejorar nuestros servicios. Los usuarios serán notificados de cualquier cambio significativo.
                </p>
            </div>
        )
    }else if (n === 2) {
        return(
            <div className="flex flex-col items-start mt-10 ml-20">
                <h3 className="mb-10 text-600">Términos y Condiciones </h3>
                <p className="w-screen p-16 leading-9 text-negro">
                    Aceptación de Términos:
                    Al acceder y utilizar los servicios de Compro Inmueble, el usuario acepta estos Términos y Condiciones en su totalidad. Si no está de acuerdo con algún término, no utilice nuestros servicios.

                    Servicios Ofrecidos:
                    Compro Inmueble facilita la compra y venta de propiedades. No somos responsables por la exactitud de la información proporcionada por los usuarios y recomendamos verificar los detalles de las propiedades directamente.

                    Responsabilidades del Usuario:
                    Los usuarios son responsables de la exactitud de la información proporcionada. Compro Inmueble se reserva el derecho de suspender o cancelar cuentas que violen los términos o involucren prácticas fraudulentas.

                    Propiedad Intelectual:
                    Los derechos de propiedad intelectual de los contenidos en el sitio web son propiedad de Compro Inmueble. No se permite la reproducción sin permiso.

                    Limitación de Responsabilidad:
                    Compro Inmueble no será responsable por daños directos o indirectos resultantes del uso de nuestros servicios.

                    Ley Aplicable y Jurisdicción:
                    Estos Términos y Condiciones se rigen por las leyes de España .

                    Contacto:
                    Para cualquier pregunta o aclaración sobre estos Términos y Condiciones, contacte con nosotros a través de correo@comproinmueble.com.
                </p>
            </div>
        )
    }else  if (n === 3 ) {
        return(
            <div className="flex flex-col items-start mt-10 ml-20">
                <h3 className="mb-10 text-600 ">Política de Cookies </h3>
                <p className="w-screen p-16 leading-9 text-negro">
                    
                    Te informamos que, en cumplimiento de la normativa vigente en materia de protección de datos, el sitio web de Compro Inmueble utiliza cookies propias y de terceros.

                    ¿Qué son las cookies?
                    Una cookie es un fichero que se descarga en el dispositivo del usuario al acceder al sitio web, con la finalidad de almacenar y recuperar información sobre la navegación realizada en el dispositivo.

                    Tipos de cookies:
                    Según la entidad que las gestione:
                    Cookies propias: Enviadas al equipo terminal del usuario desde un dominio gestionado por Compro Inmueble.
                    Cookies de terceros: Enviadas desde un dominio no gestionado por Compro Inmueble.
                    Según el tiempo de duración:
                    Cookies de sesión: Temporales y eliminadas al cerrar la sesión o salir del sitio.
                    Cookies permanentes: Almacenadas en el dispositivo del usuario hasta su fecha de caducidad.
                    Cookies utilizadas por Compro Inmueble:
                    Cookies técnicas:
                    Permiten la navegación y el uso de las diferentes opciones o servicios en el sitio web.
                    Cookies de personalización:
                    Permiten acceder al servicio con características predefinidas según criterios como idioma o tipo de navegador.
                    Cookies de análisis:
                    Facilitan el seguimiento y análisis del comportamiento de los usuarios en el sitio web para mejorar la experiencia y el contenido.
                    Cookies publicitarias:
                    Gestionan eficazmente los espacios publicitarios y ofrecen anuncios relevantes.
                    Consentimiento del usuario:
                    La base jurídica que legitima estos tratamientos es el consentimiento del usuario, prestado a través de las opciones de configuración de cookies. El usuario puede rechazar el uso de cookies mediante los mecanismos indicados a continuación.

                    Configuración de cookies:
                    El usuario puede revisar y cambiar su configuración de cookies a través del Panel de configuración o ajustar las opciones del navegador instalado en su dispositivo. Consulta la sección de ayuda de tu navegador para obtener información específica sobre cómo gestionar cookies.

                    Actualizaciones y cambios en la Política de Cookies:
                    La variación de las cookies en este sitio web puede estar relacionada con la gestión y el mantenimiento del mismo. Se realizan revisiones periódicas para adecuar la política de cookies.

                    Derechos de los usuarios en protección de datos:
                    Para obtener más información sobre el tratamiento de datos personales y ejercitar tus derechos, visita nuestra Política de Privacidad o ponte en contacto con nosotros a través de nuestro correo electrónico: correo@comproinmueble.com.
                </p>
            </div>

        )
    }
}