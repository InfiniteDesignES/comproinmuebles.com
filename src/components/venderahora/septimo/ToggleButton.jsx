/* eslint-disable react/prop-types */

export default function ToggleButton({ message, onClick, isActive }) {
    return (
        <button className={isActive ? "bg-400 w-full h-10 border-[2px] rounded-md border-[var(--color-borde)] transition-all" : " w-full h-10 border-[2px] rounded-md border-[var(--color-borde)] transition-all"} onClick={onClick}>
            {message}
        </button>
    );
}