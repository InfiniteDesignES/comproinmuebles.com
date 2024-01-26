import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { LoadScript, GoogleMap } from '@react-google-maps/api';

import FloatingLabelInput from './FloatingLabelInput.jsx';

import TomTomAutoComplete from './TomTomAutoComplete';

const mapsApi = 'AIzaSyDH6pOimF4MMMzfqde8JsXxKdXLvD1HLvE';

export default function InformacionVivienda() {
  const mapContainerStyle = {
    width: '100%',
    minHeight: '200px',
    borderRadius: '0.375rem', // Tailwind CSS rounded-md equivalent
    border: '1px solid var(--color-borde)'
  };

  const [center, setCenter] = useState({
    lat: 37.834245,
    lng: -6.442457
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      codigo_postal: '' // Establece un valor inicial vacío o adecuado
    }
  });

  const codigoPostal = watch('codigo_postal');

  const onsubmit = (data) => {
    console.log(data);
  };

  const handleSelectAddress = useCallback(
    (address) => {
      setValue('direccion', address);
    },
    [setValue]
  );

  const handleSelectAddressCP = useCallback(
    (cpValue) => {
      setValue('codigo_postal', cpValue); // Asegúrate de que cpValue contenga el código postal
    },
    [setValue]
  );

  const handleSelectAddressCoords = useCallback(
    (addresscoords) => {
      setValue('coordenadas', addresscoords);
      setCenter({ lat: addresscoords.lat, lng: addresscoords.lng }); // Suponiendo que addresscoords tenga lat y lng
    },
    [setValue, setCenter]
  );

  // hay que hacer tambien el codigo postal

  return (
    <form
      onSubmit={handleSubmit(onsubmit)}
      className="max-w-[800px] min-h-[550px] border border-[var(--color-borde)] rounded-lg flex flex-col px-8 py-4 bg-[var(--blanco)] gap-4"
    >
      <span className="text-2xl font-bold">Información de la vivienda</span>

      {/* <FloatingLabelInput label="Dirección completa" id="direccion" register={register} required={true} /> */}
      <TomTomAutoComplete
        register={register}
        id="direccion"
        required={true}
        onSelect={handleSelectAddress}
        onSelectCoords={handleSelectAddressCoords}
        onSelectCP={handleSelectAddressCP}
      />

      <div className="w-full flex flex-col md:grid md:grid-cols-6 gap-2">
        <FloatingLabelInput
          label="Código postal"
          id="codigo_postal"
          register={register}
          required={true}
          type="number"
          min={0}
          value={codigoPostal}
        />
        <FloatingLabelInput
          label="Número de portal"
          id="numero_portal"
          register={register}
          required={true}
          type="number"
          min={0}
        />
        <FloatingLabelInput label="Bloque" id="bloque" register={register} />
        <FloatingLabelInput label="Escalera" id="escalera" register={register} type="number" min={0} />
        <FloatingLabelInput label="Piso" id="piso" register={register} type="number" min={0} />
        <FloatingLabelInput label="Puerta" id="puerta" register={register} required={true} type="number" min={0} />
      </div>

      {(errors.direccion || errors.codigo_postal || errors.numero_portal || errors.puerta) && (
        <span className="text-[var(--color-rojo)] text-sm mt-4">Por favor completa todos los campos</span>
      )}

      <div className="w-full h-[1px] bg-[var(--color-borde)] my-4"></div>
      <div className="w-full min-h-[200px] rounded-md border border-[var(--color-borde)]">
        <LoadScript googleMapsApiKey={mapsApi}>
          <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={18}>
            {/* Aquí puedes añadir marcadores o rutas si es necesario */}
          </GoogleMap>
        </LoadScript>
      </div>

      <button
        type="submit"
        className="w-full h-9 rounded-md mt-4 text-[var(--blanco)] bg-gradient-to-r from-400 via-600 to-800 bg-pos-0 hover:bg-pos-50 active:bg-pos-100 bg-size-200 transition-all duration-150"
      >
        Continuar
      </button>
    </form>
  );
}
