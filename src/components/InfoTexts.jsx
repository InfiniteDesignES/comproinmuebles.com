export default function InfoTexts   ({n}) {

    if (n === 0 ||  n === null || n === undefined) {
        n = 1
    }
     if (n === 1) {
        return(
            <div className="flex flex-col mt-10 ml-3 w-100">
                <h3 className="mb-10 ml-9 text-600" >Política de Privacidad </h3>
                <p className="leading-9 w-100 p-14 text-negro">
                    <strong>Información que Recopilamos:</strong><br />
                    En Compro Inmueble, recopilamos información personal limitada y relevante para proporcionar nuestros servicios. Esto puede incluir nombres, direcciones, información de contacto y detalles de propiedades.
                    <br />
                    <strong>Uso de la Información:</strong>
                    <br />
                    La información recopilada se utiliza para facilitar la compra y venta de inmuebles, mejorar nuestros servicios, y mantener una comunicación efectiva con nuestros usuarios. No compartimos información con terceros sin el consentimiento del usuario, excepto cuando sea necesario para cumplir con la ley.
                    <br />
                    <strong>Seguridad de la Información:</strong><br />
                    Implementamos medidas de seguridad para proteger la información recopilada. Sin embargo, no podemos garantizar la seguridad absoluta, y los usuarios comparten su información bajo su propia responsabilidad.
                    <br />
                    <strong>Cookies y Tecnologías Similares:</strong><br />
                    Consulte nuestra Política de Cookies para obtener información detallada sobre el uso de cookies y cómo gestionar las preferencias del usuario.
                    <br />
                    <strong>Derechos del Usuario:</strong><br />
                    Los usuarios tienen derecho a acceder, corregir, actualizar o eliminar su información personal. Pueden ejercer estos derechos poniéndose en contacto con nosotros a través de correo@comproinmueble.com.
                    <br />
                    <strong>Información que Recopilamos:</strong><br />
                    La Política de Privacidad puede ser modificada para cumplir con cambios legislativos o mejorar nuestros servicios. Los usuarios serán notificados de cualquier cambio significativo.
                </p>
            </div>
        )
    }else if (n === 2) {
        return(
            <div className="flex flex-col mt-10 w-100 ">
                <h3 className="mb-10 ml-9 text-600">Términos y Condiciones </h3>
                <p className="leading-9 w-100 p-14 text-negro">
                    <strong>Aceptación de Términos:</strong>
                    <br />
                    Al acceder y utilizar los servicios de Compro Inmueble, el usuario acepta estos Términos y Condiciones en su totalidad. Si no está de acuerdo con algún término, no utilice nuestros servicios.
                    <br />
                    <strong>Servicios Ofrecidos:</strong>
                    <br />
                    Compro Inmueble facilita la compra y venta de propiedades. No somos responsables por la exactitud de la información proporcionada por los usuarios y recomendamos verificar los detalles de las propiedades directamente.
                    <br />
                    <strong>Responsabilidades del Usuario: </strong>
                    <br />
                    Los usuarios son responsables de la exactitud de la información proporcionada. Compro Inmueble se reserva el derecho de suspender o cancelar cuentas que violen los términos o involucren prácticas fraudulentas.
                    <br />
                    <strong>Propiedad Intelectual:</strong><br />
                    Los derechos de propiedad intelectual de los contenidos en el sitio web son propiedad de Compro Inmueble. No se permite la reproducción sin permiso.
                    <br />
                    <strong>Limitación de Responsabilidad:</strong><br />
                    Compro Inmueble no será responsable por daños directos o indirectos resultantes del uso de nuestros servicios.
                    <br />
                    <strong>Ley Aplicable y Jurisdicción:</strong><br />
                    Estos Términos y Condiciones se rigen por las leyes de España .
                    <br />
                    <strong>Contacto:</strong><br />
                    Para cualquier pregunta o aclaración sobre estos Términos y Condiciones, contacte con nosotros a través de correo@comproinmueble.com.
                </p>
            </div>
        )
    }else  if (n === 3 ) {
        return(
            <div className="flex flex-col mt-10 w-100">
                <h3 className="mb-10 ml-9 text-600">Política de Cookies </h3>
                <p className="leading-9 p-14 w-100 text-negro">
                    
                    Te informamos que, en cumplimiento de la normativa vigente en materia de protección de datos, el sitio web de Compro Inmueble utiliza cookies propias y de terceros.
                    <br />
                    <strong>¿Qué son las cookies? </strong>
                    <br />
                    Una cookie es un fichero que se descarga en el dispositivo del usuario al acceder al sitio web, con la finalidad de almacenar y recuperar información sobre la navegación realizada en el dispositivo.
                    <br />
                     <strong>Tipos de cookies:</strong>
                     <br />
                    Según la entidad que las gestione:
                    Cookies propias: Enviadas al equipo terminal del usuario desde un dominio gestionado por Compro Inmueble.<br />
                    Cookies de terceros: Enviadas desde un dominio no gestionado por Compro Inmueble.<br />
                    Según el tiempo de duración:<br />
                    Cookies de sesión: Temporales y eliminadas al cerrar la sesión o salir del sitio.<br />
                    Cookies permanentes: Almacenadas en el dispositivo del usuario hasta su fecha de caducidad.<br />
                    Cookies utilizadas por Compro Inmueble:<br />
                    Cookies técnicas:<br />
                    Permiten la navegación y el uso de las diferentes opciones o servicios en el sitio web.<br />
                    Cookies de personalización:<br />
                    Permiten acceder al servicio con características predefinidas según criterios como idioma o tipo de navegador.<br />
                    Cookies de análisis:<br />
                    Facilitan el seguimiento y análisis del comportamiento de los usuarios en el sitio web para mejorar la experiencia y el contenido.<br />
                    Cookies publicitarias:<br />
                    Gestionan eficazmente los espacios publicitarios y ofrecen anuncios relevantes.<br />
                    Consentimiento del usuario:<br />
                    La base jurídica que legitima estos tratamientos es el consentimiento del usuario, prestado a través de las opciones de configuración de cookies. El usuario puede rechazar el uso de cookies mediante los mecanismos indicados a continuación.
                    <br />
                    <strong>Configuración de cookies:</strong>
                    <br />
                    El usuario puede revisar y cambiar su configuración de cookies a través del Panel de configuración o ajustar las opciones del navegador instalado en su dispositivo. Consulta la sección de ayuda de tu navegador para obtener información específica sobre cómo gestionar cookies.
                    <br />
                    <strong>Actualizaciones y cambios en la Política de Cookies:</strong>
                    <br />
                    La variación de las cookies en este sitio web puede estar relacionada con la gestión y el mantenimiento del mismo. Se realizan revisiones periódicas para adecuar la política de cookies.
                    <br />
                    <strong>Derechos de los usuarios en protección de datos:</strong>
                    <br />
                    Para obtener más información sobre el tratamiento de datos personales y ejercitar tus derechos, visita nuestra Política de Privacidad o ponte en contacto con nosotros a través de nuestro correo electrónico: correo@comproinmueble.com.
                </p>
            </div>

        )
    }
}