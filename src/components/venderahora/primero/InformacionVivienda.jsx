/* eslint-disable react/prop-types */
import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { LoadScript, GoogleMap } from '@react-google-maps/api';

import FloatingLabelInput from './FloatingLabelInput.jsx';

import TomTomAutoComplete from './TomTomAutoComplete';

const mapsApi = 'AIzaSyDH6pOimF4MMMzfqde8JsXxKdXLvD1HLvE';

export default function InformacionVivienda({ toggleComponent }) {
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
      codigo_postal: '', // Establece un valor inicial vacío o adecuado
      numero_calle: ''
    }
  });

  const codigoPostal = watch('codigo_postal');
  const numeroCalle = watch('numero_calle');

  const onFormSubmit = (data) => {
    console.log(data);
    toggleComponent(data);
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

  const handleSelectAddressSN = useCallback(
    (snValue) => {
      setValue('numero_calle', snValue); // Asegúrate de que snValue contenga el numero de la direccion
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
      onSubmit={handleSubmit(onFormSubmit)}
      className="flex min-h-[550px] max-w-[800px] flex-col gap-4 rounded-lg border border-[var(--color-borde)] bg-[var(--blanco)] px-8 py-4"
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
        onSelectSN={handleSelectAddressSN}
      />

      <div className="flex flex-col w-full gap-2 md:grid md:grid-cols-6">
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
          id="numero_calle"
          register={register}
          required={true}
          type="number"
          min={0}
          value={numeroCalle}
        />
        <FloatingLabelInput label="Bloque" id="bloque" register={register} />
        <FloatingLabelInput label="Escalera" id="escalera" register={register} type="number" min={0} />
        <FloatingLabelInput label="Piso" id="piso" register={register} type="number" min={0} />
        <FloatingLabelInput label="Puerta" id="puerta" register={register} required={true} type="number" min={0} />
      </div>

      {(errors.direccion || errors.codigo_postal || errors.numero_calle || errors.puerta) && (
        <span className="mt-4 text-sm text-[var(--color-rojo)]">Por favor completa todos los campos</span>
      )}

      <div className="my-4 h-[1px] w-full bg-[var(--color-borde)]"></div>
      <div className="min-h-[200px] w-full rounded-md border border-[var(--color-borde)]">
        <LoadScript googleMapsApiKey={mapsApi}>
          <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={18}>
            {/* Aquí puedes añadir marcadores o rutas si es necesario */}
          </GoogleMap>
        </LoadScript>
      </div>

      <button
        type="submit"
        className="mt-4 h-9 w-full rounded-md bg-gradient-to-r from-400 via-600 to-800 bg-size-200 bg-pos-0 text-[var(--blanco)] transition-all duration-150 hover:bg-pos-50 active:bg-pos-100"
      >
        Continuar
      </button>
    </form>
  );
}
