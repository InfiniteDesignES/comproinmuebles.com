/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const TomTomAutoComplete = ({ register, id, required, onSelect, onSelectCoords, onSelectCP, onSelectSN }) => {
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);
  const autocompleteRef = useRef(null); // Ref para el contenedor del autocompletado

  const [isInputFocused, setIsInputFocused] = useState(false);

  const [suggestions, setSuggestions] = useState([]);
  const apiKey = 'boTNPFhEgA8ZOKuaWPVkZMsJSIgvQVNq'; // Reemplaza con tu clave API
  const handleSearch = async (event) => {
    const query = event.target.value;

    if (query.length > 3) {
      try {
        const response = await axios.get(`https://api.tomtom.com/search/2/search/${query}.json`, {
          params: {
            key: apiKey,
            limit: 5, // Número de sugerencias que quieres mostrar
            language: 'es-ES', // Idioma de las sugerencias
            countrySet: 'ES' // Limita las sugerencias a un país
          }
        });

        if (response.data.results) {
          setSuggestions(response.data.results);
        } else {
          setSuggestions([]); // Limpia las sugerencias si no hay resultados
        }
      } catch (error) {
        console.error('Error al obtener sugerencias:', error);
        setSuggestions([]); // Limpia las sugerencias en caso de error
      }
    } else {
      setSuggestions([]); // Limpia las sugerencias si la longitud de la consulta es menor a 2
    }
  };

  const handleClickOutside = (event) => {
    if (autocompleteRef.current && !autocompleteRef.current.contains(event.target)) {
      setIsSuggestionsVisible(false); // Oculta las sugerencias si se hace clic fuera
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInputFocus = () => {
    setIsInputFocused(true);
    setIsSuggestionsVisible(true); // Mostrar sugerencias al enfocar
  };

  const handleInputBlur = (e) => {
    setIsInputFocused(e.target.value !== ''); // Mantén el label arriba si hay texto
  };

  return (
    <div className="relative" ref={autocompleteRef}>
      <input
        type="text"
        {...register(id, { required })}
        id={id}
        className="w-full h-10 px-4 border-2 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 text-base"
        onChange={(e) => {
          handleSearch(e);
          setIsSuggestionsVisible(true);
        }}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        autoComplete="off"
      />
      <label
        htmlFor={id}
        className={`absolute left-2 top-1/2 transform -translate-y-1/2 text-[11px] text-[var(--color-texto-secundario)] transition-all duration-300 ease-in-out pointer-events-none ${
          isInputFocused ? 'scale-75 -translate-y-10 -translate-x-4' : ''
        }`}
      >
        {'Dirección completa'} {required && <span className="text-[var(--color-rojo)]">*</span>}
      </label>

      {isSuggestionsVisible && (
        <div className="absolute w-full mt-2 max-h-28 overflow-y-auto z-10 gap-2 flex flex-col bg-[var(--blanco)]">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="w-full flex flex-col gap-1 pr-2">
              <button
                className="w-full h-10 px-4 border-2 border-gray-300 hover:border-[3px] rounded-md text-start border-[var(--color-borde)]  text-base cursor-pointer z-10 bg-[var(--blanco)]"
                onClick={(e) => {
                  e.preventDefault();
                  onSelect(suggestion.address.freeformAddress);
                  onSelectCoords({ lat: suggestion.position.lat, lng: suggestion.position.lon });
                  if (suggestion.address.postalCode) {
                    onSelectCP(suggestion.address.postalCode);
                  }

                  if (suggestion.address.streetNumber) {
                    onSelectSN(suggestion.address.streetNumber);
                  }
                  setIsSuggestionsVisible(false); // Cierra las sugerencias al seleccionar
                }}
              >
                {suggestion.address.freeformAddress}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TomTomAutoComplete;
