import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <footer className="bg-600 text-03">
      <div className="flex justify-between items-center p-20 w-full md:flex-row flex-col md:gap-0 gap-4 text-center">
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <span className="text-xl w-full text-center font-bold">Logo</span>
          </div>
          <div className="text-sm">
            <span>&copy;Copyright 2024</span>
            <br />
            <span>ComproInmuebles</span>
          </div>
        </div>
        <div className="text-lg flex md:gap-16 gap-4 md:flex-row flex-col">
          <Link to="" className="hover:underline">
            Política de Privacidad
          </Link>
          <Link to="" className="hover:underline">
            Términos y Condiciones
          </Link>
          <Link to="" className="hover:underline">
            Cookies
          </Link>
          <Link to="" className="hover:underline">
            Vender
          </Link>
        </div>
      </div>
    </footer>
  );
}
