import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <footer className="bg-600 text-03">
      <div className="flex flex-col items-center justify-between w-full gap-4 p-20 text-center md:flex-row md:gap-0">
        <div className="flex flex-col gap-4">

          <div className="flex items-center gap-2">
            <img width={'80px'} src='/logos/LogoNoBG2.png' />
            <img width={'200px'} src='/logos/linkey2.jpg' />
          </div>
          <div className="text-sm">
            <span>&copy;Copyright 2024</span>
            <br />
            <span>ComproInmuebles</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-lg md:gap-16 md:flex-row">
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
