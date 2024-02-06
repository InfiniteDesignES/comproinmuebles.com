import * as Slider from '@radix-ui/react-slider';
import "../styles/Slider.css"

export default function MetrosCuadrados() {
    return (
        <div className="relacionExterior max-w-[620px] w-full min-h-[320px] h-full bg-[var(--fondo-informacion-vivienda)] rounded-md flex items-center justify-center gap-10 flex-col bg-900">
            <h3 className="text-2xl font-semibold">Superficie de la vivienda (m2)</h3>
            <form className='w-full flex items-center justify-center'>
                <Slider.Root className="SliderRoot w-full" defaultValue={[50]} max={100} step={1}>
                    <Slider.Track className="SliderTrack w-full">
                        <Slider.Range className="SliderRange bg-600 " />
                    </Slider.Track>
                    <Slider.Thumb className="SliderThumb hover:bg-50 " aria-label="Volume" />
                </Slider.Root>
            </form>
        </div>

    )
}