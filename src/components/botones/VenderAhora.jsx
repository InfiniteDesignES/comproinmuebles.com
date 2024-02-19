import { Link } from "react-router-dom";

export default function VenderAhora() {
  return (
    <Link to={"vender"} className="flex justify-center items-center w-60 h-14 text-03 rounded-lg mt-4 font-bold text-lg gradiente bg-pos-0 hover:bg-pos-50 active:bg-pos-100 bg-size-200 transition-all duration-150">{"VENDER AHORA"}</Link>
  );
}
