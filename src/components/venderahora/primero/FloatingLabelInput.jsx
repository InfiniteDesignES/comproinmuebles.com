/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function FloatingLabelInput({ label, id, register, required, type = 'text', min, value }) {
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => setIsFocused(true);
  const onBlur = (e) => setIsFocused(e.target.value !== '');

  // Determina si el label debe estar arriba en función del enfoque o del valor
  const shouldLabelMove = isFocused || (value && value !== '');

  return (
    <div className="relative mt-2">
      <input
        type={type}
        {...register(id, { required })}
        id={id}
        className="w-full h-10 px-4 border-2 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 text-base"
        onFocus={onFocus}
        onBlur={onBlur}
        min={min}
        autoComplete="off"
        value={value}
      />
      <label
        htmlFor={id}
        className={`absolute left-2 top-1/2 transform -translate-y-1/2 text-[11px] text-[var(--color-texto-secundario)] transition-all duration-300 ease-in-out pointer-events-none ${
          shouldLabelMove ? 'scale-75 -translate-y-10 -translate-x-3' : ''
        }`}
      >
        {label} {required && <span className="text-[var(--color-rojo)]">*</span>}
      </label>
    </div>
  );
}
