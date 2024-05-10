/* eslint-disable react/prop-types */

export default function ToggleButton({ message, onClick, isActive }) {
    return (
        <button type="button" className={isActive ? "bg-400 w-full px-4 h-10 border-[2px] rounded-md border-[var(--color-borde)] transition-all text-base" : " w-full h-10 border-[2px] rounded-md border-[var(--color-borde)] transition-all px-4 text-base"} onClick={onClick}>
            {message}
        </button>
    );
}